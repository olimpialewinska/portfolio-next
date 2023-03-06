
import React, { useState } from "react";
import { Bg, FormBg, Layout, Title } from "./style";

interface EditModalProps {
    id: string;
    text: string;
    visible: boolean;
    hide: () => void;
}


function EditModal(props : EditModalProps) {
 

  return (
    <>
    <Bg style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}>
            <FormBg style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}>
            <Layout>
                <Title>Edytuj opis</Title>

                
                
            </Layout>
            

            </FormBg>
        
    </Bg>
    </>
  );
}

export { EditModal };
