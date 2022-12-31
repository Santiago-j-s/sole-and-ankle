import { Outlet } from "@remix-run/react";
import styled from "styled-components";
import Header from "~/components/Header";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--background-color);
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
