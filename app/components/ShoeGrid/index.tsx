import { useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import type { loader } from "~/routes/sales/shoes.$shoetype";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Shoe = styled.pre`
  outline: 1px solid black;
  width: 340px;
`;

const ShoeGrid: React.FC = () => {
  const { shoes } = useLoaderData<typeof loader>();

  return (
    <Wrapper>
      {shoes.map((shoe) => (
        <Shoe key={shoe.slug}>{JSON.stringify(shoe, null, 2)}</Shoe>
      ))}
    </Wrapper>
  );
};

export default ShoeGrid;
