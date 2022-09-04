import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-normal);
  color: var(--gray-700);

  height: 42px;
  display: flex;
  align-items: center;
`;

const BreadCrumbs: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

interface CrumbProps {
  to: Parameters<typeof Link>[0]["to"];
}

const CrumbLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: var(--gray-900);
    font-weight: var(--font-weight-medium);
  }

  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: "/";
      color: var(--gray-300);
      margin-right: 8px;
    }
  }
`;

export const Crumb: React.FC<PropsWithChildren<CrumbProps>> = ({
  to,
  children,
  ...delegated
}) => {
  return (
    <CrumbLink to={to} {...delegated}>
      {children}
    </CrumbLink>
  );
};

export default BreadCrumbs;
