import styled from "styled-components";

export const Bg = styled.div`
  display: flex;
  width: 100%;
  height:100vh;
  justify-content: center;
  align-items: center;

`;

export const Card = styled.div`
  width: 30%;
  background: linear-gradient(#4776e6, #8e54e9);
  padding: 70px 28px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
`;

export const CardHeader = styled.div``;

export const CardTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 28px;
`;

export const CardBody = styled.div`
width: 90%;`;

export const Form = styled.form`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Button = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 20px;
  color: #4776e6;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover{
    background-color: #e9e9e9;
  color: #8e54e9;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
  }
`;
