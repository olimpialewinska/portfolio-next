import { CATEGORIES } from "@/constants";
import Link from "next/link";
import { useState } from "react";
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

export function DashboardView() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (image: React.SetStateAction<string>) => () => {
    setCurrentImage(image);
    setShow(true);
  };

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
          <Photo image="5.jpeg" text="aaaa" id={""}/>
          
        </Card>
      </Layout>
    </>
  );
}
