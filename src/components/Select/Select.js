import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const StyledSelect = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;

  width: fit-content;

  color: ${COLORS.gray700};
  font-family: Roboto, sans-serif;
  font-size: ${16 / 16}rem;
  font-weight: 400;

  position: relative;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }

  padding-right: 52px;
`;

const StyledHiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
  color: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto 0;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect>
      <StyledHiddenSelect value={value} onChange={onChange}>
        {children}
      </StyledHiddenSelect>
      <span>{displayedValue}</span>
      <StyledIcon id="chevron-down" strokeWidth={2} size={24} />
    </StyledSelect>
  );
};

export default Select;
