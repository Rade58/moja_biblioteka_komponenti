import styled from "styled-components";
import { typescale, primaryFont } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typescale.helperText};
    padding: 8px;
  `,
  large: (props) => `
    font-size: ${typescale.header5};
    padding: 16px 24px;
  `,
  warning: (props) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      /* outlibne-offset je inherited, ustvari ako bude trebao dodaj ga */
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }

  `,
  warningButtonSecondary: (props) => `
    background: none;
    border-color: ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  warningButtonTertiary: (props) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  font-family: ${primaryFont};
  font-size: ${typescale.paragraph};

  border: none;
  color: white;
  padding: 12px 24px;
  min-width: 100px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorPrimary};
  }

  &:focus {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorPrimary};
    outline: 3px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    border-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: #ffffff;

  &:disabled {
    background-color: ${(props) => props.theme.disabledColor};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: #b2a9d1;
  border-radius: 8px;
  color: #ffffff;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default Button;
