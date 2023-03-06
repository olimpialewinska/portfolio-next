import { url } from "inspector";
import { useState } from "react";
import { EditModal } from "../EditModal";
import { Row, Image, Text, ActionButtons, Delete, Edit } from "./style";

interface RowProps {
  image: string;
  text: string;
    id: string;
}

export function Photo(props: RowProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (image: string) => () => {
      setShow(true);
    };
  return (
    <>
      <Row>
        <Image
          alt="zdjęcie"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <Text>aaaa</Text>
        <ActionButtons>
            <Edit onClick={handleShow(props.text)}/>
            <Delete/>
        </ActionButtons>
      </Row>

      <EditModal
        visible={show}
        hide={handleClose}
        text={props.text}
        id={props.id}
      />
    </>
  );
}
