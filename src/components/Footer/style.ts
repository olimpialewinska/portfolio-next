import styled from "styled-components";

export const FooterContainer = styled.footer``;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color:  #afafaf;
  margin: 40px 0 0 0;
`;

export const SocialBtns = styled.div`
  margin: 0;
  padding: 10px;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;


`;

export const Ul = styled.ul`
  margin: 0;
  padding: 10px;
`;

export const Li = styled.li`
  margin: 0;
  padding: 10px 30px;
  list-style: none outside none;
  display: inline-block;
  text-decoration: none;
`;

export const IconIG = styled.div`
  width: 50px;
  height: 50px;

  text-decoration: none;
  color: #000;
  mask-image: url(/instagram.svg);
  background-color:  #afafaf;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;
  padding-top: 12px;
  border-radius: 50%;

  &:hover {
    color: #ffffff;
    background-color: #fff;
  }
`;

export const IconFB = styled.div`
  width: 50px;
  height: 50px;
  text-decoration: none;
  color: #000;
  mask-image: url(/facebook.svg);
  background-color:  #afafaf;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;
  padding-top: 12px;
  border-radius: 50%;

  &:hover {
    color: #fff;
    background-color: #fff;
  }
`;
