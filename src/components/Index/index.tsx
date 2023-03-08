import { MyModal } from "@/components/Modal/Modal";
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Gridelement } from "../GridElement";

import {
  ButtonImage,
  Content,
  ContentDescription,
  ContentGrid,
  ContentTitle,
  GalleryButton,
  GridContainer,
  IndexCard,
  IndexContainer,
  WrapperMain,
} from "./style";

export function Index() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await (await fetch(`/api/homeSixPhotos`)).json();
      const urls = data.urls.map((data: { url: any; category: any }) => {
        return {
          url: data.url,
          category: data.category,
        };
      });
      setImageUrls(urls);
    };

    load();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (image: React.SetStateAction<string>) => () => {
    setCurrentImage(image);
    setShow(true);
  };
  return (
    <>
      <IndexContainer>
        <IndexCard>
          <WrapperMain>
            <Content>
              <ContentTitle>Oskar Lewiński</ContentTitle>
              <ContentDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </ContentDescription>
              <GalleryButton>
                Galeria
                <ButtonImage />
              </GalleryButton>
            </Content>
            <Card height="650px" image="5.jpeg" borderRadius={""} />
          </WrapperMain>
        </IndexCard>
      </IndexContainer>

      <ContentGrid>
        <GridContainer>
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
        </GridContainer>
      </ContentGrid>
      <MyModal visible={show} hide={handleClose} image={currentImage} />

      <IndexContainer>
        <IndexCard>
          <WrapperMain>
            <Card height="400px" image="10.jpeg" borderRadius={"50%"} />
            <Content>
              <h1>O mnie</h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </p>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
            </Content>
          </WrapperMain>
        </IndexCard>
      </IndexContainer>

      <Footer />
    </>
  );
}
