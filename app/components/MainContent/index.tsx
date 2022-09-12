import { Form, useLoaderData, useMatches, useSubmit } from "@remix-run/react";
import type { FormEvent } from "react";
import styled from "styled-components";
import BreadCrumbs, { Crumb } from "~/components/BreadCrumbs";
import ShoeGrid from "~/components/ShoeGrid";
import Sidebar from "~/components/Sidebar";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const Wrapper = styled.main`
  display: flex;
  padding: 64px var(--site-padding) 0 var(--site-padding);
`;

const LeftColumn = styled.div`
  flex: 1 1;
  width: fit-content;
  order: 1;
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
`;

const HeaderText = styled.span`
  position: relative;
  margin-top: -8px;

  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-normal);
  line-height: ${24 / 16}rem;
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
          <Form action="." method="get" onChange={handleChange}>
            Sort{" "}
            <select name="sort">
              <option value="newest-releases">Newest Releases</option>
              <option value="price">Price</option>
            </select>
          </Form>
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
        <Sidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export default MainContent;
