import { MyModal } from "@/components/Modal/Modal";
import { CATEGORIES } from "../../constants";
import { useState } from "react";
import { Gridelement } from "../GridElement";
import { Button, GalleryButtons, GalleryGrid, Header } from "./style";

export function Gallery() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (image: React.SetStateAction<string>) => () => {
    setCurrentImage(image);
    setShow(true);
  };

  interface CategoryProps {
    name: string;
  }

  return (
    <>
      <Header>Galeria</Header>

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
      <GalleryGrid>
      <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />{" "}
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />
        <Gridelement
          image={"5.jpeg"}
          text={"aaa"}
          showImage={handleShow}
          borderRadius="8px"
        />

      </GalleryGrid>
      

      <MyModal visible={show} hide={handleClose} image={currentImage} />
    </>
  );
}
