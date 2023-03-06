import styled from "styled-components";

export const Bg = styled.div`
  transition: 0.2s opacity;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 99999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBg = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: 0.2s transform;
`;

export const Layout = styled.div`
  max-width: 340px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Form = styled.form`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

export const TextArea = styled.textarea``;

export const Buttons = styled.div`
margin-top: 16px;
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





