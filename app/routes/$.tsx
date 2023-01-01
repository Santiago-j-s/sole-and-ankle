import type { HeadersFunction } from "@remix-run/node";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  flex-grow: 1;
`;

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=300, stale-while-revalidate=3600",
  };
};

export default function NotFound() {
  return (
    <Wrapper>
      <h1>404: Not Found</h1>
    </Wrapper>
  );
}
