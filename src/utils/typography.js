// OVO STO CU PRVO URADITI EMMA NIJE URADILA, VEC JA RADIM OVO JER IMAM FONT LOKALNO, A ONA SALJE NETWORK REQUEST
// KA GOOGLE FONT API, TAKO STO JE DEFINISALA LINK TAG U HTML-U
// ****
import fontFamilyUrl from "../fonts/OxygenMono-Regular.ttf";
// ****
// PRVO STO ZELIM JESTE DA EXPORT-UJEM PRIMARY FONT
// MOJ FONT SE ZVAO "Oxygen Mono", A DEFINISACU I FALLBACK
export const primaryFont = '"Oxygen Mono", monospace';

// ****
// DAKLE OVO SLEDECE STO SAM URADIO EMMA NIJE URADILA JER LOAD-UJE FONT-OVE SA GOOGLE FONTSA
// JA ZELIM DA IMAM FONT FACE KOJI CU MOCI KORISTITI NA OVAJ NACIN
export const primaryFontFace = `
  @font-face {
    font-family: "Oxygen Mono";
    src: url(${fontFamilyUrl}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
`;
// ****

//  A SADA KORISTIM TYPESCALE
// OVO DAKLE PREPISUJES IZ TYPESCALE-A KOJEG SI DEFINISAO U FIGMI
export const typescale = {
  header1: "3.052rem",
  header2: "2.441rem",
  header3: "1.953rem",
  header4: "1.563rem",
  header5: "1.25rem",
  paragraph: "1rem",
  helperText: "0.8rem",
  copyrightText: "0.64rem",
};
