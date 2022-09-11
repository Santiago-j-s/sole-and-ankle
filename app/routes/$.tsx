import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h1>404: Not Found</h1>
    </Wrapper>
  );
}
