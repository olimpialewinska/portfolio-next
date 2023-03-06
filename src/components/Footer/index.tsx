import Link from "next/link";
import { FooterContainer, Hr, IconFB, IconIG, Li, SocialBtns, Ul } from "./style";

export function Footer() {
  return (
    <>
      <FooterContainer>
        <Hr />
        <SocialBtns>
          <Ul>
            <Li>
              <Link
                href="https://www.facebook.com/oskarlewinskifotografia"
                target="_blank"
                rel="noreferrer"
              >
                <IconFB/>
                <div className="fa fa-lg fa-facebook"></div>
              </Link>
            </Li>
            <Li>
              <Link
                href="https://www.instagram.com/oskarlewinski/"
                target="_blank"
                rel="noreferrer"
              >
                    <IconIG/>
                <div className="fa fa-lg fa-instagram"></div>
              </Link>
            </Li>
            <Li>
              <Link
                href="https://www.facebook.com/lewinskiphotografia"
                target="_blank"
                rel="noreferrer"
              >
                    <IconFB/>
              </Link>
            </Li>
          </Ul>
        </SocialBtns>
      </FooterContainer>
    </>
  );
}
