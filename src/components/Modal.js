import React from "react";
import styled from "styled-components";
// UVESCU SVE STA M ITREBA IZ NOVOG PAKETA
import { animated, useSpring, config } from "react-spring";
//
import { typescale } from "../utils";
import { illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "../components";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typescale.header3};
`;
const SignUpText = styled.p`
  font-size: ${typescale.paragraph};
  max-width: 70%;
  text-align: center;
`;
export const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 38px;
  right: 38px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

// EVO RETRUKTURIRACU PROPSE
export const SignUpModal = ({ modalIsShown, setModalIsShown }) => {
  // PODESAVAM ANIAMCIJU U ODNOSU NA PROLSEDJENI STATE
  const animation = useSpring({
    opacity: modalIsShown ? 1 : 0,
    transform: modalIsShown ? `translateY(0)` : `translateY(-200%)`,
    // A ZADACU I CONFIG KOJI CE KAO STO SAM REKAO ODEREDITI MASSU I TENSSION KOMPONENTE KAOJA SE ANIMIRA
    config: config.wobbly, // ZADAO SAM DA JE ANIMA CIJA WOBBLY
  });

  // DODACU I onClick HANDLER NA CLOSING DUGMETU

  // A POSTO JE MODAJ PREDMET ANIMACIJE, WRAPP-OVACU GA INSIDE animated.div
  // A TU ZADAJEM I ANIMACIJU

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={illustrations.signup}
          alt="Sign up for an account!"
          aria-hidden={true}
        />

        <SignUpHeader>Sign Up!</SignUpHeader>
        <SignUpText>Sign up today to get access to cool things!</SignUpText>
        <PrimaryButton>Sign Up</PrimaryButton>
        {/* EVO GA I ON CLICK */}
        <CloseModalButton
          aria-label="close modal"
          onClick={() => setModalIsShown(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
