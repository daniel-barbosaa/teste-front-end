import HeartIcon from "@/assets/icons/Heart.svg";
import SearchIcon from "@/assets/icons/MagnifyingGlass.svg";
import CartIcon from "@/assets/icons/ShoppingCart.svg";
import UserIcon from "@/assets/icons/UserCircle.svg";
import BoxIcon from "@/assets/icons/Vector.svg";
import Logo from "@/assets/logo.svg";
import { Input } from "../ui/input/input";
import { AnnouncementBar } from "./announcementbar";

import "./header.scss";

export function Header() {
  return (
    <header className="header-container">
      <AnnouncementBar />

      <div className="header-content">
        <img src={Logo} alt="Logo da loja" />
        <div className="search-container">
          <Input placeholder="O que você está buscando?" />
          <img src={SearchIcon} alt="" />
        </div>

        <ul className="header-actions">
          <li>
            <button type="button" aria-label="Minha conta">
              <img src={BoxIcon} alt="" />
            </button>
          </li>

          <li>
            <button type="button" aria-label="Favoritos">
              <img src={HeartIcon} alt="" />
            </button>
          </li>

          <li>
            <button type="button" aria-label="Carrinho de compras">
              <img src={UserIcon} alt="" />
            </button>
          </li>
          <li>
            <button type="button" aria-label="Carrinho de compras">
              <img src={CartIcon} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
