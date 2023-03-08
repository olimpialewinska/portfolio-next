import { storage, db } from "config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import formidable from "formidable";
import { readFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

interface Image {
  name: string;
  category: string;
  description: string;
  file: Blob;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }

    await Promise.all(
      Object.keys(files).map(async (name) => {
        const file = files[name] as formidable.File;
        const imageRef = ref(storage, `${fields.category}/${file.newFilename}`);
        const buffer = await readFile(file.filepath);
        await uploadBytesResumable(imageRef, buffer);
        const downloadURL = await getDownloadURL(imageRef);

        await addDoc(collection(db, "Photos"), {
          category: fields.category,
          url: downloadURL,
          description: fields.description,
          date: Date.now(),
          name: file.newFilename,
        });
      })
    );

    res.status(200).json({ message: "OK" });
  });
}
