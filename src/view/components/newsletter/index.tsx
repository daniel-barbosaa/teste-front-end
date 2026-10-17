import { Input } from "../ui/input/input";
import "./newsletter.scss";

export function NewsLetter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-info">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <div className="newsletter-form">
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu email" />
          <button type="button">Inscrever</button>

          <div>
            <input type="checkbox" id="newsletter-terms" />
            <label htmlFor="newsletter-terms">
              Aceito os termos e condições
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
