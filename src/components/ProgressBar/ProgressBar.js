/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Track = styled.div`
  border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  padding: ${(props) => (props.size === "large" ? "4px" : "0")};
`;

const BorderRadius = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const progressHeight = (size = "large") =>
  ({
    large: 16,
    medium: 12,
    small: 8,
  }[size]);

const Progress = styled.div`
  background: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: ${(props) => progressHeight(props.size)}px;
`;

const Min = 0,
  Max = 100;

const ProgressBar = ({ value: valueProp, size }) => {
  const value = Math.max(Min, Math.min(valueProp, Max));

  return (
    <div>
      <VisuallyHidden>
        <span id="loadinglabel">Loading:</span>
      </VisuallyHidden>
      <Track
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        aria-valuemin={Min}
        aria-valuemax={Max}
        size={size}
      >
        <BorderRadius>
          <Progress value={value} size={size} />
        </BorderRadius>
      </Track>
    </div>
  );
};

export default ProgressBar;
