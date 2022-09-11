import { NavLink, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import type { loader } from "~/routes/$sales/shoes.$shoetype";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
`;

const SidebarLink = styled(NavLink)`
  color: var(--gray-900);
  text-decoration: none;

  &.active {
    color: var(--primary);
  }
`;

const Sidebar: React.FC = () => {
  const { shoetypes } = useLoaderData<typeof loader>();

  return (
    <Wrapper>
      {shoetypes.map((shoetype) => (
        <SidebarLink key={shoetype.slug} to={`../shoes/${shoetype.slug}`}>
          {shoetype.text}
        </SidebarLink>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
