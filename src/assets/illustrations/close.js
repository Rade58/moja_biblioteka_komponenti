//  DAKLE OD SVG-JA PRAVI MREACT KOMPONENTU
import React from "react";
import styled from "styled-components";

// ALI KORISTIM STYLED COMPONENTS, KAK OBI NAPRAVIO WRAPPER-A
const CloseIconWrapper = styled.svg`
  width: 120%;
  height: 120%;
`;

// OVO CE BITI NAMED EXPORT, A VIDECES I ZASTO, VEOMA USKORO

export const CloseIcon = () => {
  return (
    // STAVLJAM SVG U WRAPPER
    <CloseIconWrapper aria-hidden="true">
      <svg
        // OVI ATRIBUTI NECE TREBATI (ZATO STO SAM U WRAPPER-U DEFINISAO SIZE), VEC SAMO path I fill
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.9411 24.2989L19.6438 16L27.9411 7.70176L24.2988 4.0592L16.0009 12.3571L7.703 4.0592L4.06044 7.70176L12.3587 16L4.05884 24.2989L7.70108 27.9411L16.0009 19.6419L24.2988 27.9411L27.9411 24.2989Z"
          fill="black"
        />
      </svg>
    </CloseIconWrapper>
  );
};
