import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Header = styled.div`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  padding: 64px 0;
  background: linear-gradient(#4776e6, #8e54e9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 6rem !important;
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
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.08)" : "transparent"};
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 4px;
  padding: 8px 12px;
  transition: 0.2s background-color, 0.2s border;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid transparent;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  padding: 20px 100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr) !important;
    padding: 10px !important;
  }
`;
