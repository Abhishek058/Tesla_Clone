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
        {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
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
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 790px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
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
