import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { primaryFont, primaryFontFace } from "./typography";

// U TEMPLATE-U PISEM SAV CSS KOJI ZELIM DA APPLY-UJEM GLOBALNO

// PRVA STVAR KOJU ZELI MDA URADIM JESTE DA NORMALIZUJEM MOJ CODE
// A TO RADIS TAKO STO U TEMPLATE STRINGU UGRADIS POZIV normalize FUNKCIJE
export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  ${primaryFontFace}

  html {
    font-size: 18px;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }


  body {
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }


`;
