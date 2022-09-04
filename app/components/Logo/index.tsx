import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled(Link)`
  color: var(--gray-900);
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
`;

interface LogoProps extends Omit<LinkProps, "to" | "prefetch"> {}

const Logo: React.FC<PropsWithChildren<LogoProps>> = ({
  children,
  ...delegated
}) => {
  return (
    <Wrapper to="/" prefetch="intent" {...delegated}>
      {children}
    </Wrapper>
  );
};

export default Logo;
