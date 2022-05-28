import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>CUSTOM ORDER</LeftButton>
        <RightButton>EXISTING INVENTORY</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div``;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
`;
const RightButton = styled(LeftButton)``;
