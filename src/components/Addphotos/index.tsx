import { CATEGORIES } from "@/constants";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ImageModel } from "../DashboardView";
import {
  Blue,
  Card,
  Center,
  Form,
  FormGroup,
  Green,
  Input,
  Layout,
  Menu,
  Select,
  Title,
  Option,
} from "./style";

export function Addphotos() {
  const [text, setText] = useState("");
  const [imagesUpload, setImagesUpload] = useState<File[]>([]);
  const [selectedOption, setSelectedOption] = useState("Inne");

  const uploadImages = useCallback(async () => {
    const body = new FormData();
    imagesUpload.forEach((image) => {
      body.append(image.name, image);
    });
    body.append("description", text);
    body.append("category", selectedOption);
    const response = await fetch("/api/addphotos/", {
      method: "POST",
      body,
    });

    console.log(response);
  }, [imagesUpload, selectedOption, text]);

  return (
    <>
      <Layout>
        <Card>
          <Menu>
            <Link href="/dashboard">
              <Blue> ← POWRÓT</Blue>
            </Link>
            <Green onClick={uploadImages}>OPUBLIKUJ</Green>
          </Menu>
          <Center>
            <Form>
              <Title>Dodaj pliki</Title>
              <FormGroup>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Opis"
                  onChange={(event) => {
                    const text = event.target.value;
                    setText(text);
                  }}
                />
                <Select
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                  }}
                >
                  {CATEGORIES.map((category, i) => (
                    <Option key={i}>{category.name}</Option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Input
                  type="file"
                  name="files"
                  id="files"
                  multiple={true}
                  onChange={(event) => {
                    const files = event.target.files;
                    if (!files) return;
                    setImagesUpload(Array.from(files));
                  }}
                />
              </FormGroup>
            </Form>
          </Center>
        </Card>
      </Layout>
    </>
  );
}
