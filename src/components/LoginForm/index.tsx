import { Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Input, Bg } from "./style";

export function LoginForm(){
    return(
        <>
        <Bg>
        <Card>
            <CardHeader>
                <CardTitle>Logowanie</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="Hasło" />
                    </FormGroup>
                    <Button color="primary">Zaloguj</Button>
                </Form>
            </CardBody>
        </Card>
        </Bg>
        </>
    )
}