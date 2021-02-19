import Link from "next/link";
import * as S from "./MenuMobile.Styles";

export function MenuMobile({ show }) {
  return (
    <S.ContainerMenuMobile show={show}>
      <S.MenuMobileNavigation>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/nossos-pratos">
          <a>Nossos pratos</a>
        </Link>
        <Link href="/galeria">
          <a>Galeria</a>
        </Link>
        <Link href="/eventos">
          <a>Eventos</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
      </S.MenuMobileNavigation>
    </S.ContainerMenuMobile>
  );
}
