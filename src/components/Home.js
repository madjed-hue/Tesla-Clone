import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        carImg="/images/model-s.jpg"
        carName="Model S"
        carSubtitle="Order online for touchless delivery"
        leftButtonText="Custom order"
        rightButtonText="exising inventory"
      />
      <Section
        carImg="/images/model-y.jpg"
        carName="Model Y"
        carSubtitle="Order online for touchless delivery"
        leftButtonText="Custom order"
        rightButtonText="exising inventory"
      />
      <Section
        carImg="/images/model-3.jpg"
        carName="Model 3"
        carSubtitle="Order online for touchless delivery"
        leftButtonText="Custom order"
        rightButtonText="exising inventory"
      />
      <Section
        carImg="/images/model-x.jpg"
        carName="Model X"
        carSubtitle="Order online for touchless delivery"
        leftButtonText="Custom order"
        rightButtonText="exising inventory"
      />

      <Section
        carImg="/images/solar-panel.jpg"
        carName="Solar Panels"
        carSubtitle="Lowest Cost Solar Panels in America"
        leftButtonText="Order Now"
        rightButtonText="Learn more"
      />
      <Section
        carImg="/images/solar-roof.jpg"
        carName="Solar Roof"
        carSubtitle="Produce Clean Energy From Your Roof"
        leftButtonText="Order Now"
        rightButtonText="Learn more"
      />
      <Section
        carImg="/images/accessories.jpg"
        carName="Accessories"
        carSubtitle=""
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
