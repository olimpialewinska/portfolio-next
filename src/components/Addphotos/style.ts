import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const Card = styled.div`
  background: white;
  width: 90%;
  height: 100%;
  margin: 30px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Blue = styled.div`
padding: 6px 24px;
  background-color: rgb(0, 102, 255);
  border: 0;
  border-radius: 5px;
  margin: 2px 10px;
  color: #fff;
  transition: 0.5s;
  display: inline-block;
  text-decoration: none;
  align-items: center;
  
  &:hover {
    background-color: rgb(0, 64, 159);
  color: #fff;}

  `;

export const Green = styled.button`
padding: 6px 24px;
  background-color: rgb(0, 127, 0);
  border: 0;
  border-radius: 5px;
  margin: 2px 10px;
  color: #fff;
  transition: 0.5s;
  display: inline-block;
  text-decoration: none;
  align-items: center;

  &:hover {
    background-color: rgb(0, 84, 0);
  color: #fff;
  }
`;

export const Center = styled.div`
display: flex;
  justify-content: center;
  color: #2b2e32;
`;


export const FormGroup = styled.div`
  width: 90%;
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
  width: 90%;

  

`;

export const Form = styled.form`
margin-top: 48px;
 width: 800px;
 padding: 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
    @media (max-width: 768px) {
    width: 100% !important;
    padding: 80px 0;
    }
`;

export const Title = styled.h2`
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    
`;






