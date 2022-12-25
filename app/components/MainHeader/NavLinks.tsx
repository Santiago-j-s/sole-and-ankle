import { NavLink, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import type { loader } from "~/root";
import MainHeader from ".";

const WrapperNavLinksNavbar = styled.ul<{ mainHeaderClassName: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: ${48 / 16}rem;

  @media (${QUERIES.tabletAndDown}) {
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

  gap: ${22 / 16}rem;
`;

interface WrapperNavLinksProps {
  variant: "navbar" | "drawer";
  children: React.ReactNode;
}

const WrapperNavLinks: React.FC<WrapperNavLinksProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "navbar":
      return (
        <WrapperNavLinksNavbar mainHeaderClassName={MainHeader.toString()}>
          {children}
        </WrapperNavLinksNavbar>
      );

    case "drawer":
      return <WrapperNavLinksDrawer>{children}</WrapperNavLinksDrawer>;

    default:
      throw new Error("Invalid variant");
  }
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
}

/**
 * using the contents in index.tsx
 * create a new component called NavLinks
 * that renders a list of links
 * in desktop mode the links should be rendered horizontally
 * in mobile mode the links should be rendered vertically
 */
const NavLinks = ({ variant }: NavLinksProps) => {
  const { sales } = useLoaderData<typeof loader>();

  return (
    <WrapperNavLinks variant={variant}>
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
