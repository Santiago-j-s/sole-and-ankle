import { useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import type { loader } from "~/routes/sales/shoes.$shoetype";
import { Shoe } from "../Shoe";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeGrid: React.FC = () => {
  const { shoes } = useLoaderData<typeof loader>();

  return (
    <Wrapper>
      {shoes.map((shoe) => (
        <Shoe key={shoe.name} {...shoe} />
      ))}
    </Wrapper>
  );
};

export default ShoeGrid;
