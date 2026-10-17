import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragraIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import Logo from "@/assets/logo.svg";
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <img src={Logo} alt="Econverse" />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <img src={InstragraIcon} alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={LinkedinIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <nav className="footer-links" aria-label="Links do rodapé">
          <div className="footer-link-group">
            <h3>Institucional</h3>
            <a href="#">Sobre nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </div>

          <div className="footer-link-group">
            <h3>Ajuda</h3>
            <a href="#">Suporte</a>
            <a href="#">Fale conosco</a>
            <a href="#">Perguntas frequentes</a>
          </div>

          <div className="footer-link-group">
            <h3>Termos</h3>
            <a href="#">Termos e condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </footer>
  );
}
