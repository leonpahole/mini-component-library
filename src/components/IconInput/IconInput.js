import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Label = styled.label`
  position: relative;
  display: block;

  width: ${(p) => (p.width ? `${p.width}px` : "100%")};

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: inherit;
`;

const Input = styled.input`
  border: none;
  width: 100%;

  font-family: Roboto, sans-serif;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  padding-left: var(--padding-left);

  outline-offset: 2px;
  outline-color: ${COLORS.primary};
`;

const sizes = {
  small: {
    "--font-size": `${14 / 16}rem`,
    "--padding-left": "24px",
    "--padding-top": "4px",
    "--padding-bottom": "3px",
    "--border-width": "1px",
  },
  large: {
    "--font-size": `${18 / 16}rem`,
    "--padding-left": "36px",
    "--padding-top": "6px",
    "--padding-bottom": "4px",
    "--border-width": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Label width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <div>
        <StyledIcon id={icon} size={size === "large" ? 24 : 16} />
        <Input type="text" placeholder={placeholder} style={sizes[size]} />
      </div>
    </Label>
  );
};

export default IconInput;
