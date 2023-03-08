import { db } from "config";
import { collection, query, orderBy, limit, getDocs, DocumentData } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  urls: { url: string; description: string; category: string }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const urls: { url: string; description: string; category: string }[] = [];
  const citiesRef = collection(db, "Photos");
  const q = query(citiesRef, orderBy("date", "desc"), limit(6));
  const response = await getDocs(q);
  response.docs.forEach((doc) => {
    const data = doc.data() as DocumentData;
    urls.push({
      url: data.url,
      description: data.description,
      category: data.category,
    });
  });
  res.status(200).json({ urls });
}