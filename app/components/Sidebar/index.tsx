import { Link, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Sidebar: React.FC = () => {
  const { shoetypes } = useLoaderData<typeof loader>();

  return (
    <Wrapper>
      {shoetypes.map((shoetype) => (
        <Link key={shoetype.slug} to={shoetype.slug}>
          {shoetype.text}
        </Link>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
