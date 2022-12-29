import styled from "styled-components";
import Icon from "./Icon";

const StyledSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;

  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  // styles
  color: inherit;

  border-radius: 8px;
  width: fit-content;
  padding: 12px 16px;
  padding-right: 52px;
  cursor: pointer;

  &:focus {
    outline: 1px solid currentColor;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;

  top: 0;
  right: 10px;
  bottom: 0;

  margin: auto;

  width: var(--size);
  height: var(--size);

  color: inherit;
  pointer-events: none;
`;

const Wrapper = styled.div`
  display: inline-block;

  position: relative;

  width: fit-content;

  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;

  border-radius: 8px;

  background-color: var(--gray-100);
  color: var(--gray-700);

  &:hover {
    color: var(--gray-900);
  }
`;

interface SelectProps {
  name: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ name, children }) => {
  return (
    <Wrapper>
      <StyledSelect name={name}>{children}</StyledSelect>
      <StyledIcon icon="ChevronDown" size={24} strokeWidth="2" />
    </Wrapper>
  );
};

export default Select;
