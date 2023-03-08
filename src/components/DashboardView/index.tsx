import { CATEGORIES } from "@/constants";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Photo } from "../Photo";
import {
  Blue,
  Button,
  Card,
  CardNav,
  GalleryButtons,
  Layout,
  Red,
} from "./style";

interface CategoryProps {
  name: string;
}

export interface ImageModel {
  url: string;
  description: string;
  id: string;
  category: string;
  name: string;

}

export function DashboardView() {

  const [currentCategory, setCurrentCategory] = useState("");
  const [imageUrls, setImageUrls] = useState<ImageModel[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await (await fetch(`/api/gallery?category=${currentCategory}`)).json();
      const urls = data.urls.map((data: ImageModel) => {
        return {
          id: data.id,
          name: data.name,
          url: data.url,
          category: data.category,
          description: data.description,
        };
      });
      setImageUrls(urls);
    };

    load();
  }, [currentCategory]);
  
  const deleteImage = useCallback((id: string) => {
    const filteredImages = imageUrls.filter((image) => image.id !== id);
    setImageUrls(filteredImages);
  }, [imageUrls]);

  return (
    <>
      <Layout>
        <Card>
          <CardNav>
            <Link href="/addphotos">
              <Blue>DODAJ ZDJĘCIA</Blue>
            </Link>
            <Red>WYLOGUJ</Red>
          </CardNav>
          <GalleryButtons>
            <Button
              active={currentCategory === "" ? true : false}
              onClick={() => setCurrentCategory("")}
            >
              Wszystko
            </Button>
            {CATEGORIES.map((category: CategoryProps, i: number) => {
              return (
                <Button
                  key={i}
                  active={currentCategory === category.name ? true : false}
                  onClick={() => setCurrentCategory(category.name)}
                >
                  {category.name}
                </Button>
              );
            })}
          </GalleryButtons>

          {imageUrls.map((image: ImageModel, i) => {
              return (
                <Photo
                  key={i}
                  image={image}
                  deleteImage={deleteImage}
                />
              );
            })}
          
        </Card>
      </Layout>
    </>
  );
}
