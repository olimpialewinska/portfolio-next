import { MyModal } from "@/components/Modal/Modal";
import { CATEGORIES } from "../../constants";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const load = async () => {
      const data = await (await fetch(`/api/gallery/${currentCategory}`)).json();
      const urls = data.urls.map((data: { url: any; category: any }) => {
        return {
          url: data.url,
          category: data.category,
        };
      });
      setImageUrls(urls);
    };

    load();
  }, [currentCategory]);

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
      {imageUrls.map((image: {
            url: string;
            category: string;

          }, i) => {
            return (
              <Gridelement
                key={i}
                image={image.url}
                text={image.category}
                showImage={handleShow}
                borderRadius="0"
              />
            );
          })}
      </GalleryGrid>
      

      <MyModal visible={show} hide={handleClose} image={currentImage} />
    </>
  );
}
