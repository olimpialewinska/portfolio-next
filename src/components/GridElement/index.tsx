import React from "react";
import { Arrow, GridElement, ItemImage, Overlay, Text } from "./style";

interface GridElementProp {
  image: string;
  text: string;
  borderRadius: string;
  showImage: (image: string) => () => void;
}

function Gridelement(props: GridElementProp) {
  return (
    <>
      <GridElement
        onClick={props.showImage(props.image)}
        style={{
          borderRadius: props.borderRadius,
          position: "relative",
        }}
      >
        <ItemImage
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <Overlay>
          <Text>{props.text}</Text>
        </Overlay>
        <Arrow />
      </GridElement>
    </>
  );
}

export { Gridelement };
