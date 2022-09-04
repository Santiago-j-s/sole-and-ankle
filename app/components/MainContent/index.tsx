import { useMatches } from "@remix-run/react";
import styled from "styled-components";
import BreadCrumbs, { Crumb } from "~/components/BreadCrumbs";
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

const MainContent: React.FC = () => {
  const matches = useMatches();

  const crumbs = matches.map((match) => ({
    to: match.pathname,
    text: match.handle?.breadcrumb,
  }));

  return (
    <Wrapper>
      <RightColumn>
        <header>Running</header>
        <ShoeGrid />
      </RightColumn>
      <LeftColumn>
        <BreadCrumbs>
          {crumbs.map((crumb) => (
            <Crumb key={crumb.to} to={crumb.to}>
              {crumb.text}
            </Crumb>
          ))}
        </BreadCrumbs>
        <Sidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export default MainContent;
