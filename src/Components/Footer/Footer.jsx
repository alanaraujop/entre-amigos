import FacebookIcon from "../../assets/images/facebook.png";
// import InstagramIcon from "../../assets/images/instagram.png";
// import FooterLogo from "../../assets/images/logo_footer.png";
import Image from "next/image";
export function Footer() {
  return (
    <div className="footer">
      <div className="social-container">
        <div className="divider" />
        <span className="footer-title">Nos acompanhe aqui:</span>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/entreamigosgastronomia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Imagem com erro no loader */}
            <Image
              src={FacebookIcon}
              alt="Página no Facebook do Entre Amigos"
              width={500}
              height={500}
            />
          </a>
          <a
            href="https://www.instagram.com/entreamigos_rj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={InstagramIcon} alt="Instagram do Entre Amigos" /> */}
          </a>
        </div>
        <span className="footer-name">Entre Amigos Gastronomia</span>
      </div>
      <div className="footer-logo">
        {/* <img src={FooterLogo} alt="Logo do Entre Amigos Gastronomia" /> */}
      </div>
    </div>
  );
}

export default Footer;
