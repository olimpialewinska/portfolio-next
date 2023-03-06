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
`;
