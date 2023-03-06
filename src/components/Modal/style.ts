import styled from "styled-components";


export const  ModalBg = styled.div`
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

export const Image = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: 0.2s transform;`;