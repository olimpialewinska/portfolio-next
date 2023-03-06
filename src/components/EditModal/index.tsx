import React, { useState } from "react";
import {
  Bg,
  Blue,
  Buttons,
  Form,
  FormBg,
  Green,
  Layout,
  TextArea,
  Title,
} from "./style";

interface EditModalProps {
  id: string;
  text: string;
  visible: boolean;
  hide: () => void;
}

function EditModal(props: EditModalProps) {
  return (
    <Bg
      style={{
        opacity: props.visible ? 1 : 0,
        pointerEvents: props.visible ? "inherit" : "none",
      }}
    >
      <FormBg
        style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}
      >
        <Layout>
          <Title>Edytuj opis</Title>
          <Form>
            <TextArea value={props.text}></TextArea>
            <Buttons>
              <Blue onClick={props.hide}>Anuluj</Blue>
              <Green>Zapisz</Green>
            </Buttons>
          </Form>
        </Layout>
      </FormBg>
    </Bg>
  );
}

export { EditModal };
