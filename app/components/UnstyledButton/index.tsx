import React from "react";
import type { CSSProperties } from "styled-components";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display?: CSSProperties["display"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, display, ...delegated }, ref) => {
    return (
      <button ref={ref} {...delegated}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

const UnstyledButton = styled(Button)`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  line-height: 0;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default UnstyledButton;
