import styled from "styled-components";
import Search from "~/components/Search";
import Icon from "~/components/Icon";
import UnstyledButton from "~/components/UnstyledButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  height: 40px;

  font-size: ${14 / 16 + "rem"};
  color: var(--gray-300);

  background-color: var(--gray-900);

  padding-left: 32px;
  padding-right: 32px;
`;

const MarkettingText = styled.span`
  font-weight: var(--font-weight-normal);
  font-size: inherit;
  margin-right: auto;
  color: var(--white);
`;

const HelpLink = styled.a`
  color: currentColor;
`;

const ShoppingBagIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  stroke-width: 1;
  color: var(--gray-300);
`;

const SuperHeader: React.FC = () => {
  return (
    <Wrapper>
      <MarkettingText>
        Free shipping on domestic orders over $75!
      </MarkettingText>
      <Search />
      <HelpLink>Help</HelpLink>
      <UnstyledButton height="24px">
        <ShoppingBagIcon icon="ShoppingBag" />
      </UnstyledButton>
    </Wrapper>
  );
};

export default SuperHeader;
