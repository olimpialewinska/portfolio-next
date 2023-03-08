import { db } from "config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const name = req.query.name;
  const category = req.query.category;
  const requestMethod = req.method;
  const text = req.body.text;

  if (!id) {
    res.status(500).json({ message: "ID not set" });
    return;
  }

  switch (requestMethod) {
    case "DELETE":
      const storage = getStorage();
      const storageRef = ref(storage, `${category}/${name}`);
      try {
        await deleteObject(storageRef);
        await deleteDoc(doc(db, "Photos", id));
        res.status(200).json({ message: `Deleted` });
      } catch (error) {
        res.status(500).json({ message: `${error}` });
      }
      break;

    case "PUT":
      try {
        await updateDoc(doc(db, "Photos", id), {
          description: text,
        });
      } catch (error) {
        res.status(500).json({ message: `Server error` });
      }
      res.status(200).json({ message: "Description has been updated" });
      break;
  }
}
