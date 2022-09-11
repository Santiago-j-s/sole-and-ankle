import { Outlet } from "@remix-run/react";
import styled from "styled-components";
import Header from "~/components/Header";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
