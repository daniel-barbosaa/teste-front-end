import CreditCardIcon from "@/assets/icons/CreditCard.svg";
import ShieldCheckIcon from "@/assets/icons/ShieldCheck.svg";
import TruckIcon from "@/assets/icons/Truck.svg";
import "./header.scss";

export function AnnouncementBar() {
  return (
    <ul className="benefits-container">
      <li className="benefit-item">
        <img src={ShieldCheckIcon} alt="" />
        <p>
          Compra <span>100% segura</span>
        </p>
      </li>

      <li className="benefit-item">
        <img src={TruckIcon} alt="" />
        <p>
          <span>Frete grátis</span> acima de R$ 200
        </p>
      </li>

      <li className="benefit-item">
        <img src={CreditCardIcon} alt="" />
        <p>
          <span>Parcele</span> suas compras
        </p>
      </li>
    </ul>
  );
}
