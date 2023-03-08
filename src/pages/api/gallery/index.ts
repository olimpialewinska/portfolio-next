import { db } from "config";
import { collection, query, orderBy, limit, getDocs, DocumentData, where } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const currentCategory = req.query.category;
  const citiesRef = collection(db, "Photos");

  let q;
  if (currentCategory !== "") {
    q = query(citiesRef, where("category", "==", currentCategory));
  } else {
    q = query(citiesRef, orderBy("date", "desc"));
  }

  const response = await getDocs(q);
  const urls = await Promise.all(
    response.docs.map((item) => {
      const data = item.data();
      return {
        url: data.url,
        description: data.description,
        id: item.id,
        category: data.category,
        name: data.name,
      };
    })
  );

  res.status(200).json({ urls });
}