import styled from "styled-components";
import Icon from "~/components/Icon";
import VisuallyHidden from "~/components/VisuallyHidden";

const Label = styled.label`
  display: block;
  position: relative;
`;

const SearchInput = styled.input`
  width: 175px;

  appearance: none;

  background-color: transparent;
  color: var(--gray-300);

  font-weight: var(--font-weight-normal);
  font-size: ${14 / 16}rem;
  line-height: 1.5rem;

  border: none;
  border-bottom: 1px solid var(--gray-300);

  outline-offset: 4px;

  padding-left: 24px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gray-500);
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  color: currentColor;
  pointer-events: none;
`;

const Search: React.FC = () => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <SearchInput type="search" placeholder="Search..." />
      <SearchIcon icon="Search" size={16} />
    </Label>
  );
};

export default Search;
