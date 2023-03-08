import { url } from "inspector";
import { useState } from "react";
import { ImageModel } from "../DashboardView";
import { EditModal } from "../EditModal";
import { Row, Image, Text, ActionButtons, Delete, Edit } from "./style";

interface RowProps {
  image: ImageModel;
  deleteImage: (id: string) => void;
}

export function Photo({ image, deleteImage }: RowProps) {
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
            backgroundImage: `url(${image.url})`,
          }}
        />
        <Text>{image.description}</Text>
        <ActionButtons>
          <Edit onClick={handleShow(image.description)} />
          <Delete
            onClick={ 
              async () => {
              const response = await fetch(
                `/api/dashboard/photos/${image.id}?name=${image.name}&category=${image.category}`,
                {
                  method: "DELETE",
                }
              );
              if (response.status === 200) {
                deleteImage(image.id);
              }
            }}
          />
        </ActionButtons>
      </Row>

      <EditModal
        visible={show}
        hide={handleClose}
        text={image.description}
        id={image.id}
      />
    </>
  );
}
