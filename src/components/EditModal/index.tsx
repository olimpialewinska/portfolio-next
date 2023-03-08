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
  const [text, setText] = useState(props.text);

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
            <TextArea
            defaultValue={text}
              onChange={(e) => {
                setText(e.target.value);
                console.log(e.target.value);
              }}
            >
             
            </TextArea>
            <Buttons>
              <Blue onClick={props.hide}>Anuluj</Blue>
              <Green
                onClick={ 
                  async () => {
                  const response = await fetch(
                    `/api/dashboard/photos/${props.id}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        text: text,
                      }),
                    }
                  );
                  if (response.status === 200) {
                    props.hide();
                    alert("Zaaktualizowano opis!")
                  }
                }}
              >
                Zapisz
              </Green>
            </Buttons>
          </Form>
        </Layout>
      </FormBg>
    </Bg>
  );
}

export { EditModal };
