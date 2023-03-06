import styled from "styled-components";

interface ImageProps {
  alt: string;
}

export const Row = styled.div`
  color: black;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  background-color: #e6e6fa;
  align-items: center;
  padding-right: 32px;
  transition: 0.5s;

  @media (max-width: 768px) {
    padding-right: 16px !important;
  }

  &:hover {
    background-color: #e6e6ff;
  }
`;

export const Image = styled.div<ImageProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 120px;
  width: 120px;
  margin: 16px;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Text = styled.div`
  flex: 1;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Edit = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  opacity: 0.54;
  background-image: url(/edit.svg);

  &:hover {
    opacity: 1;
  }
`;

export const Delete = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  opacity: 0.54;
  background-image: url(/delete.svg);

  &:hover {
    opacity: 1;
  }
`;
