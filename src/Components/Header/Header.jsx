import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
import Link from "next/link";
// import LogoHeader from "../../assets/images/logo_header.png";
// import MenuButton from "../MenuButton";
// import MenuMobile from "../MenuMobile";
import * as S from "./Header.styles";

export function Header() {
  // const [renderMenuMobile, setRenderMenuMobile] = useState(false);
  // const router = useRouter();
  // const pathname = router.pathname;
  // const opacityValue = pathname === "/" ? 0 : 1;

  // useEffect(() => {
  //   setRenderMenuMobile(false);

  // if (pathname === "/") {
  //   window.addEventListener("scroll", opacityEffect);
  //   let activeBackground = document.querySelector(".link-background");
  //   activeBackground.style.opacity = 0;
  // }

  // return () => {
  //   window.removeEventListener("scroll", opacityEffect);
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.pathname]);

  // const opacityEffect = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   const parentContainer = document.querySelector(".carouselContainer");
  //   const parentHeight = !!parentContainer && parentContainer.offsetHeight;
  //   const headerBackground = document.querySelector(".header-background");
  //   const activeBackground = document.querySelector(".link-background");

  //   if (parentHeight === 240) {
  //     headerBackground.style.opacity = currentScrollPos / 185;
  //   }
  //   if (parentHeight < 400) {
  //     headerBackground.style.opacity = currentScrollPos / 220;
  //     activeBackground.style.opacity = currentScrollPos / 250;
  //   } else if (parentHeight < 600) {
  //     headerBackground.style.opacity = currentScrollPos / 350;
  //     activeBackground.style.opacity = currentScrollPos / 350;
  //   } else {
  //     headerBackground.style.opacity = currentScrollPos / 550;
  //     activeBackground.style.opacity = currentScrollPos / 350;
  //   }
  // };

  return (
    <>
      <S.MasterContainerHeader>
        <S.ContainerImageLogo>
          <div>
            <Link href="/">
              <S.Imagem
                src="/assets/images/logo_header.png"
                alt="Logo do Entre Amigos Gastronomia"
                width={170}
                height={48}
              />
            </Link>
          </div>
        </S.ContainerImageLogo>

        <S.NavigationMenu>
          <S.ContentNavigationMenu>
            <Link href="/">
              <a> Home</a>
            </Link>

            <Link href="/">
              <a> Nossos pratos</a>
            </Link>

            <Link href="/">
              <a>Galeria</a>
            </Link>

            <Link href="/">
              <a>Eventos</a>
            </Link>
            <Link href="/">
              <a>Contato</a>
            </Link>
          </S.ContentNavigationMenu>
        </S.NavigationMenu>

        {/* 
        <MenuMobile show={renderMenuMobile} />
        
        <MenuButton
        toggleMenuMobile={() => setRenderMenuMobile(!renderMenuMobile)}
      /> */}
      </S.MasterContainerHeader>
    </>
  );
}
