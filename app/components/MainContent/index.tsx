import { NavLink } from "@remix-run/react";
import styled from "styled-components";
import ShoeGrid from "~/components/ShoeGrid";
import Sidebar from "~/components/Sidebar";

const Wrapper = styled.main`
  display: flex;
  padding: 64px var(--site-padding) 0 var(--site-padding);
`;

const LeftColumn = styled.div`
  flex: 1 1;
  outline: 1px solid red;
  width: fit-content;
  order: 1;
`;

const RightColumn = styled.div`
  flex: 4 1;
  outline: 1px solid red;
  width: fit-content;
  order: 2;
`;

const BreadCrumbs = styled.nav`
  outline: 1px solid red;
`;

const MainContent: React.FC = () => {
  return (
    <Wrapper>
      <RightColumn>
        <header>Running</header>
        <ShoeGrid />
      </RightColumn>
      <LeftColumn>
        <BreadCrumbs>
          <ul>
            <li>
              <NavLink to="/lifestyle">Home / Sale / Shoes</NavLink>
            </li>
          </ul>
        </BreadCrumbs>
        <Sidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export default MainContent;
