import styled from "styled-components";
import { isArrowFunction } from "typescript";

export const GridElement = styled.div`
  height: 100%;
  background-color: lightgray;
  border-radius: 8px;
  aspect-ratio: 1;
  z-index: 2;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const ItemImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  transition: 0.2s transform;

${GridElement}:hover & {
    transform: scale(1.1);
    }
`;

export const Overlay = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  padding: 32px;
  background: linear-gradient(45deg, #4776e6, #8e54e9);
  font-size: 26px;
  font-weight: bold;
  transition: 0.5s;
  opacity: 0;
  ${GridElement}:hover & {
    opacity: 0.9;
    }
`;

export const Text = styled.div`
  color: white;
  position: absolute;
  bottom: 32px;
  left: 32px;
  transform: translateX(-16px);
  transition: 0.2s transform;
  ${GridElement}:hover & {
    transform: translateX(0);
    }
`;

export const Arrow = styled.div`
  transform: translateX(16px);
  position: absolute;
  opacity: 0;
  top: 24px;
  right: 24px;
  background-image: url(/maximize.svg);
  width: 48px;
  transition: 0.2s transform, 0.2s opacity;
  height: 48px;
  background-size: contain;
  filter: invert(100%);
  ${GridElement}:hover & {
    opacity: 0.24;
  transform: translateX(0);
    }
`;
