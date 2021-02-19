import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
import { useRouter } from "next/router";
// import LogoHeader from "../../assets/images/logo_header.png";
// import MenuButton from "../MenuButton";
// import MenuMobile from "../MenuMobile";

export function Header() {
  const [renderMenuMobile, setRenderMenuMobile] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const opacityValue = pathname === "/" ? 0 : 1;

  useEffect(() => {
    setRenderMenuMobile(false);

    if (pathname === "/") {
      window.addEventListener("scroll", opacityEffect);
      let activeBackground = document.querySelector(".link-background");
      activeBackground.style.opacity = 0;
    }

    return () => {
      window.removeEventListener("scroll", opacityEffect);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const opacityEffect = () => {
    const currentScrollPos = window.pageYOffset;
    const parentContainer = document.querySelector(".carouselContainer");
    const parentHeight = !!parentContainer && parentContainer.offsetHeight;
    const headerBackground = document.querySelector(".header-background");
    const activeBackground = document.querySelector(".link-background");

    if (parentHeight === 240) {
      headerBackground.style.opacity = currentScrollPos / 185;
    }
    if (parentHeight < 400) {
      headerBackground.style.opacity = currentScrollPos / 220;
      activeBackground.style.opacity = currentScrollPos / 250;
    } else if (parentHeight < 600) {
      headerBackground.style.opacity = currentScrollPos / 350;
      activeBackground.style.opacity = currentScrollPos / 350;
    } else {
      headerBackground.style.opacity = currentScrollPos / 550;
      activeBackground.style.opacity = currentScrollPos / 350;
    }
  };

  return (
    <div className="header">
      <div className="container header-container">
        <div className="header-background" style={{ opacity: opacityValue }} />

        {/* <Link to="/"> */}
        {/* <img src={LogoHeader} alt="Logo do Entre Amigos Gastronomia" /> */}
        {/* </Link> */}

        <nav className="menu-navigation">
          <div className="link-container">
            {/* <NavLink to="/" exact activeClassName="active"> */}
            Home
            {/* </NavLink> */}
            <div className="link-background homeNav"></div>
          </div>
          <div className="link-container">
            {/* <NavLink to="/nossos-pratos" activeClassName="active"> */}
            Nossos pratos
            {/* </NavLink> */}
            <div className="link-background"></div>
          </div>
          <div className="link-container">
            {/* <NavLink to="/galeria" activeClassName="active"> */}
            Galeria
            {/* </NavLink> */}
            <div className="link-background"></div>
          </div>
          <div className="link-container">
            {/* <NavLink to="/eventos" activeClassName="active"> */}
            Eventos
            {/* </NavLink> */}
            <div className="link-background"></div>
          </div>
          <div className="link-container">
            {/* <NavLink to="/contato" exact activeClassName="active"> */}
            Contato
            {/* </NavLink> */}
            <div className="link-background"></div>
          </div>
        </nav>
        {/* 
        <MenuMobile show={renderMenuMobile} />

        <MenuButton
          toggleMenuMobile={() => setRenderMenuMobile(!renderMenuMobile)}
        /> */}
      </div>
    </div>
  );
}
