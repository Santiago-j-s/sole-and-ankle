import { Form, useLoaderData, useMatches, useSubmit } from "@remix-run/react";
import type { FormEvent } from "react";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import BreadCrumbs, { Crumb } from "~/components/BreadCrumbs";
import Select from "~/components/Select";
import ShoeGrid from "~/components/ShoeGrid";
import Sidebar from "~/components/Sidebar";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const LeftColumnSidebar = styled(Sidebar)``;

const Wrapper = styled.main`
  display: flex;
  padding: 64px var(--site-padding) 0 var(--site-padding);

  @media (${QUERIES.tabletAndDown}) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1;
  width: fit-content;
  order: 1;

  ${LeftColumnSidebar} {
    @media (${QUERIES.tabletAndDown}) {
      display: none;
    }
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

  align-items: center;
  justify-content: space-between;

  margin-bottom: ${24 / 16}rem;
`;

const HeaderText = styled.span`
  position: relative;
  margin-top: ${-8 / 16}rem;

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
  @media (${QUERIES.mobileAndDown}) {
    display: none;
  }
`;

const MainContent: React.FC = () => {
  const matches = useMatches();

  const crumbs = matches.map((match) => ({
    to: match.pathname,
    text: match.handle?.breadcrumb,
  }));

  const { type } = useLoaderData<typeof loader>();

  const submit = useSubmit();

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget);
  };

  return (
    <Wrapper>
      <RightColumn>
        <Header>
          <HeaderText>{type?.text ?? ""}</HeaderText>
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
        <BreadCrumbs>
          {crumbs.map((crumb) => (
            <Crumb key={crumb.to} to={crumb.to}>
              {crumb.text}
            </Crumb>
          ))}
        </BreadCrumbs>
        <LeftColumnSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export default MainContent;
