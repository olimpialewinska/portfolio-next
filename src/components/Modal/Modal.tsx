/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ModalBg, Image } from "./style";

interface MyModalProps {
    image: string;
    visible: boolean;
    hide: () => void;
}
function MyModal(props: MyModalProps) {
  return (
    <>
    <ModalBg  style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}
        onClick={props.hide}>
      <Image  style={{
          transform: `translateY(${props.visible ? 0 : -16}px)`,
        }}>
           <img
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            src={props.image} 
          ></img>

      </Image>
    </ModalBg>
    </>
  );
}

export { MyModal };
