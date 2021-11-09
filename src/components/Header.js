import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [menuStatus, setMenuState] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href="/#" key={index}>
                {" "}
                {car}{" "}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Account</a>
        <a href="/#" onClick={() => setMenuState(true)}>
          Menu
        </a>
        <CusomMenu />
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setMenuState(false)} />
        </CloseWraper>
        <ul>
          <li>
            <a href="/#">Existing Enventory</a>
          </li>
          <li>
            <a href="/#">Used Enventory</a>
          </li>
          <li>
            <a href="/#">Test Drive</a>
          </li>
          <li>
            <a href="/#">Cybertruck</a>
          </li>
          <li>
            <a href="/#">Roadster</a>
          </li>
          <li>
            <a href="/#">Semi</a>
          </li>
          <li>
            <a href="/#">Charging</a>
          </li>
          <li>
            <a href="/#">PowerWall</a>
          </li>
          <li>
            <a href="/#">Commercial Energy</a>
          </li>
          <li>
            <a href="/#">Utilities</a>
          </li>
          <li>
            <a href="/#">Find Us</a>
          </li>
          <li>
            <a href="/#">Support</a>
          </li>
          <li>
            <a href="/#">Investor Relations</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    padding: 0 15px;
  }
`;
const CusomMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 16%;
  transition: all 0.5s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  ul {
    list-style: none;
    text-align: left;
    padding: 20px;
  }
  ul :hover {
    background-color: hsla(0, 0%, 0%, 0.05);
    border-radius: 100px;
  }
  li {
    padding: 10px 15px;
    padding-left: 20px;
  }
  a {
    font-weight: 600;
  }
`;
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 25px;
`;
const CustomClose = styled(CloseIcon)`
  margin-top: 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: hsla(0, 0%, 0%, 0.05);
  }
`;
