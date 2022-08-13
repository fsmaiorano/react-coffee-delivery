import {
  HeaderContainer,
  ActionContainer,
  Location,
  Cart,
} from "./Header.styles";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home" >
        <img src={logo} alt="logo" />
      </NavLink>
      <ActionContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          Lisboa, PT
        </Location>
        <NavLink to="/checkout" title="checkout">
          <Cart>
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  );
}
