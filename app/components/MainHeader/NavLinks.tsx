import { NavLink, useLoaderData } from "@remix-run/react";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import type { loader } from "~/root";

const WrapperNavLinksNavbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: ${48 / 16}rem;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const WrapperNavLinksDrawer = styled.ul`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: ${19.6 / 16}rem;
  line-height: ${21 / 16}rem;
`;

interface WrapperNavLinksProps {
  variant: "navbar" | "drawer";
  className?: string;
  children: React.ReactNode;
}

const WrapperNavLinksComponentMap = {
  navbar: WrapperNavLinksNavbar,
  drawer: WrapperNavLinksDrawer,
} as const;

const WrapperNavLinks: React.FC<WrapperNavLinksProps> = ({
  variant,
  className,
  children,
}) => {
  const WrapperNavLinksComponent = WrapperNavLinksComponentMap[variant];

  if (!WrapperNavLinksComponent) {
    throw new Error("Invalid variant");
  }

  return (
    <WrapperNavLinksComponent className={className}>
      {children}
    </WrapperNavLinksComponent>
  );
};

const Link = styled(NavLink)`
  color: var(--gray-900);
  font-size: ${18 / 16}rem;
  font-weight: var(--font-weight-medium);
  line-height: 21px;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;

  white-space: nowrap;

  &.active {
    color: var(--secondary);
  }

  &:hover {
    text-decoration: underline;
  }
`;

interface NavLinksProps {
  variant: "navbar" | "drawer";
  className?: string;
}

/**
 * using the contents in index.tsx
 * create a new component called NavLinks
 * that renders a list of links
 * in desktop mode the links should be rendered horizontally
 * in mobile mode the links should be rendered vertically
 */
const NavLinks = ({ variant, className }: NavLinksProps) => {
  const { sales } = useLoaderData<typeof loader>();

  return (
    <WrapperNavLinks variant={variant} className={className}>
      {sales.map((sale) => (
        <li key={sale.slug}>
          <Link to={sale.slug} prefetch="intent">
            {sale.text}
          </Link>
        </li>
      ))}
    </WrapperNavLinks>
  );
};

export default NavLinks;
