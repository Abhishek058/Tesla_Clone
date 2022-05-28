import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <img src="/images/logo.svg" alt="Tesla Logo"></img>
      <Menu>
        {cars &&
          cars.map((car, index, url) => (
            <a key={index} href={url}>
              {car}
            </a>
          ))}
          <a href="">Solar Roof</a>
          <a href="">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="https://shop.tesla.com/">Shop</a>
        <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        {cars &&
          cars.map((car, index, url) => (
            <li key={index}>
              <a href={url}>{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding:0 0 0 60px;
  a {
    font-size: 19px;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    flex-wrap: nowrap;
    padding:10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: 0.3s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid grey;

    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)``;
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
