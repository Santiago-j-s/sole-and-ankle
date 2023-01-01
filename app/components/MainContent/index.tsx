import { Form, useLoaderData, useMatches, useSubmit } from "@remix-run/react";
import type { FormEvent } from "react";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import BreadCrumbs, { Crumb } from "~/components/BreadCrumbs";
import Select from "~/components/Select";
import ShoeGrid from "~/components/ShoeGrid";
import Sidebar from "~/components/Sidebar";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const Wrapper = styled.main`
  --top-padding: 64px;

  display: flex;
  padding: var(--top-padding) var(--site-padding) 0 var(--site-padding);

  @media (${QUERIES.tabletAndSmaller}) {
    --top-padding: 48px;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1;
  width: fit-content;
  order: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const RightColumn = styled.div`
  flex: 4 1;
  width: fit-content;
  order: 2;
`;

const Header = styled.header`
  height: 42px;

  display: flex;

  align-items: baseline;
  justify-content: space-between;

  margin-bottom: ${34 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.span`
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-normal);
  line-height: ${24 / 16}rem;
`;

const SortText = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-normal);

  margin-right: ${16 / 16}rem;

  color: var(--gray-700);
`;

const SelectWrapper = styled(Form)`
  align-items: baseline;
  @media (${QUERIES.phoneAndSmaller}) {
    display: none;
  }
`;

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const MainContentBreadcrumbs = ({ className }: { className?: string }) => {
  const matches = useMatches();

  const crumbs = matches.map((match) => ({
    to: match.pathname,
    text: capitalize(match.handle?.breadcrumb),
  }));

  return (
    <BreadCrumbs className={className}>
      {crumbs.map((crumb) => (
        <Crumb key={crumb.to} to={crumb.to}>
          {crumb.text}
        </Crumb>
      ))}
    </BreadCrumbs>
  );
};

const TabletMainContentBreadcrumbs = styled(MainContentBreadcrumbs)`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) {
    display: block;
    margin-bottom: ${8 / 16}rem;
  }
`;

const MainContent: React.FC = () => {
  const { type } = useLoaderData<typeof loader>();

  const submit = useSubmit();

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget);
  };

  return (
    <Wrapper>
      <RightColumn>
        <Header>
          <HeaderLeft>
            <TabletMainContentBreadcrumbs />
            <HeaderText>{type?.text ?? ""}</HeaderText>
          </HeaderLeft>
          <SelectWrapper action="." method="get" onChange={handleChange}>
            <SortText>Sort</SortText>
            <Select name="sort">
              <option value="newest-releases">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <ShoeGrid />
      </RightColumn>
      <LeftColumn>
        <MainContentBreadcrumbs />
        <Sidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export default MainContent;
