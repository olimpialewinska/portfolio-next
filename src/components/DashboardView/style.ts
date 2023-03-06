import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

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

export const CardNav = styled.div`
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
    color: #fff;
  }
`;

export const Red = styled.div`
  padding: 6px 12px;
  background-color: rgb(169, 0, 0);
  border: 0;
  border-radius: 5px;
  margin: 2px 10px;
  color: #fff;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: rgb(113, 0, 0);
    cursor: pointer;
  }
`;

export const GalleryButtons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
`;

export const Button = styled.div<ButtonProps>`
  border-radius: 24px;
  color: black;
  border: 1px solid rgb(201, 201, 201);
  margin: 0 4px;
  padding: 8px 12px;
  transition: 0.2s background-color, 0.2s border;
  cursor: pointer;
  margin-top: 8px;
  background-color: ${(props) =>
    props.active ? " rgb(201, 201, 201)" : "transparent"};

  &:hover {
    background-color: rgb(201, 201, 201);
    border: 1px solid transparent;
  }
`;
