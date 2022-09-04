import { NavLink, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import Logo from "~/components/Logo";
import type { loader } from "~/root";

const Wrapper = styled.div`
  display: flex;

  position: relative;

  height: 72px;

  justify-content: center;
  align-items: center;

  padding-left: var(--site-padding);
  padding-right: var(--site-padding);

  border-bottom: 1px solid var(--gray-300);
`;

const HeaderLogo = styled(Logo)`
  position: absolute;
  left: var(--site-padding);
`;

const NavLinks = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  gap: 48px;
`;

const Link = styled(NavLink)`
  color: var(--gray-900);
  font-size: ${18 / 16}rem;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: var(--secondary);
  }

  &:hover {
    text-decoration: underline;
  }
`;

const MainHeader: React.FC = () => {
  const { sales } = useLoaderData<typeof loader>();

  return (
    <Wrapper>
      <HeaderLogo>Sole&Ankle</HeaderLogo>
      <NavLinks>
        {sales.map((sale) => (
          <li key={sale.slug}>
            <Link to={sale.slug} prefetch="intent">
              {sale.text}
            </Link>
          </li>
        ))}
      </NavLinks>
    </Wrapper>
  );
};

export default MainHeader;
