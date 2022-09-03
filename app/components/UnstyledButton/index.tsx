import type { PropsWithChildren } from "react";
import React from "react";
import type { CSSProperties } from "styled-components";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display?: CSSProperties["display"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
}

const Button = ({
  children,
  display,
  ...delegated
}: PropsWithChildren<ButtonProps>) => {
  return <button {...delegated}>{children}</button>;
};

export default styled(Button)`
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

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
