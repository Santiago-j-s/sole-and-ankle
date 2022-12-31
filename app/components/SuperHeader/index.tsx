import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import Icon from "~/components/Icon";
import Search from "~/components/Search";
import UnstyledButton from "~/components/UnstyledButton";

const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  height: 40px;

  font-size: ${14 / 16 + "rem"};
  color: var(--gray-300);

  background-color: var(--background-color-secondary);

  padding-left: 32px;
  padding-right: 32px;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
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

const DesktopSuperHeader: React.FC = () => {
  return (
    <DesktopWrapper>
      <MarkettingText>
        Free shipping on domestic orders over $75!
      </MarkettingText>
      <Search />
      <HelpLink>Help</HelpLink>
      <UnstyledButton height="24px">
        <ShoppingBagIcon icon="ShoppingBag" />
      </UnstyledButton>
    </DesktopWrapper>
  );
};

const MobileSuperHeader = styled.div`
  height: 4px;
  background-color: var(--gray-900);

  display: none;
  @media (${QUERIES.tabletAndSmaller}) {
    display: block;
  }
`;

const SuperHeader: React.FC = () => {
  return (
    <>
      <MobileSuperHeader />
      <DesktopSuperHeader />
    </>
  );
};

export default SuperHeader;
