import { NavLink, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
`;

const SidebarLink = styled(NavLink)`
  color: var(--gray-900);
  text-decoration: none;

  line-height: 30px;
  font-weight: var(--font-weight-medium);

  &.active {
    color: var(--primary);
  }
`;

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { shoetypes } = useLoaderData<typeof loader>();

  return (
    <Wrapper className={className}>
      {shoetypes.map((shoetype) => (
        <SidebarLink key={shoetype.slug} to={`../shoes/${shoetype.slug}`}>
          {shoetype.text}
        </SidebarLink>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
