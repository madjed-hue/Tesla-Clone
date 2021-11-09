import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  carName,
  carSubtitle,
  leftButtonText,
  rightButtonText,
  carImg,
}) {
  return (
    <Wrap bgImage={carImg}>
      <ItemText>
        <Fade top>
          <h1>{carName}</h1>
          <p>{carSubtitle}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftButtonText}</LeftButton>
          </Fade>
          {rightButtonText && (
            <Fade right>
              <RightButton>{rightButtonText}</RightButton>
            </Fade>
          )}
        </ButtonGroup>
        <Fade bottom>
          <DownArrow src="./images/down-arrow.svg" alt="down-arrow" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 8px;
  font-weight: 600;
`;
const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;
const Buttons = styled.div``;
