import React from "react";
import Mynavbar from "../Navbar";
import {
    ButtonImage,
  Content,
  ContentDescription,
  ContentTitle,
  GalleryButton,
  IndexCard,
  IndexContainer,
  WrapperMain,
} from "./style";

export function Index() {
  return (
    <IndexContainer>
      <IndexCard>
        <WrapperMain>
          <Content>
            <ContentTitle>Oskar Lewiński</ContentTitle>
            <ContentDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quod, quia, voluptate quae quidem
            </ContentDescription>
            <GalleryButton>
                Galeria
                <ButtonImage/>
            </GalleryButton>
          </Content>
          <Card height="650px" image="5.jpeg"/>
        </WrapperMain>
      </IndexCard>
    </IndexContainer>
  );
}
