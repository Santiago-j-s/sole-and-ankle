import { NavLink } from "@remix-run/react";
import styled from "styled-components";
import Logo from "~/components/Logo";

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
  return (
    <Wrapper>
      <HeaderLogo>Sole&Ankle</HeaderLogo>
      <NavLinks>
        <li>
          <Link to="/sale" prefetch="intent">
            Sale
          </Link>
        </li>
        <li>
          <Link to="/new-releases" prefetch="intent">
            New releases
          </Link>
        </li>
        <li>
          <Link to="/men" prefetch="intent">
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" prefetch="intent">
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" prefetch="intent">
            Kids
          </Link>
        </li>
        <li>
          <Link to="/collections" prefetch="intent">
            Collections
          </Link>
        </li>
      </NavLinks>
    </Wrapper>
  );
};

export default MainHeader;
