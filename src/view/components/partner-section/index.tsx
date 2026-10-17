import "./partner-section.scss";

import PartnerImage from "@/assets/apple.svg";

const partners = [
  {
    image: PartnerImage,
    title: "Parceiro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: PartnerImage,
    title: "Parceiro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function PartnerSection() {
  return (
    <section className="partner-section" aria-label="Nossos parceiros">
      {partners.map((partner, index) => (
        <article
          className="partner-card"
          key={index}
          style={{ backgroundImage: `url("${partner.image}")` }}
        >
          <div className="partner-card-content">
            <h2>{partner.title}</h2>
            <p>{partner.description}</p>
            <button type="button">Confira</button>
          </div>
        </article>
      ))}
    </section>
  );
}
