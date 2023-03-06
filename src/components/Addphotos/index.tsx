import Link from "next/link";
import { Button } from "react-bootstrap";
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
  Title,
} from "./style";

export function Addphotos() {
  return (
    <>
      <Layout>
        <Card>
          <Menu>
            <Link href="/dashboard">
              <Blue> ← POWRÓT</Blue>
            </Link>
            <Green>OPUBLIKUJ</Green>
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
                />
              </FormGroup>
              <FormGroup>
                <Input type="file" name="files" id="files" />
              </FormGroup>
            </Form>
          </Center>
        </Card>
      </Layout>
    </>
  );
}
