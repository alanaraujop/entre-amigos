import Image from "next/image";
import Link from "next/link";
import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.ContainerFooter>
      <S.SocialContainer>
        <div />
        <S.FooterTitle>Nos acompanhe aqui:</S.FooterTitle>
        <S.ContainerSocialIcons>
          <Link
            href="https://www.facebook.com/entreamigosgastronomia/"
            rel="noopener noreferrer"
          >
            <a target="_blank">
              <Image
                src="/assets/images/facebook.png"
                alt="Página no Facebook do Entre Amigos"
                width={32}
                height={32}
              />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/entreamigos_rj/"
            rel="noopener noreferrer"
          >
            <a target="_blank">
              <Image
                src="/assets/images/instagram.png"
                alt="Instagram do Entre Amigos"
                width={32}
                height={32}
              />
            </a>
          </Link>
        </S.ContainerSocialIcons>
        <S.FooterName>Entre Amigos Gastronomia</S.FooterName>
      </S.SocialContainer>
      <S.FooterLogo>
        <Image
          src="/assets/images/logo_footer.png"
          alt="Logo do Entre Amigos Gastronomia"
          width={80}
          height={100}
        />
      </S.FooterLogo>
    </S.ContainerFooter>
  );
}
