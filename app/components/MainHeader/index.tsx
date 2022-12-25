import { Root as DialogRoot } from "@radix-ui/react-dialog";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import Logo from "~/components/Logo";
import Drawer from "./Drawer";
import { MobileButtons } from "./MobileButtons";
import NavLinks from "./NavLinks";

const WrapperLogo = styled(Logo)``;

export const Wrapper = styled.div`
  display: flex;

  position: relative;

  height: 72px;

  justify-content: center;
  align-items: center;
  gap: ${48 / 16}rem;

  padding-left: var(--site-padding);
  padding-right: var(--site-padding);

  border-bottom: 1px solid var(--gray-300);

  ${WrapperLogo} {
    position: absolute;
    left: var(--site-padding);
  }

  @media (${QUERIES.laptopAndDown}) {
    justify-content: flex-start;

    ${WrapperLogo} {
      position: revert;
    }
  }
`;

/**
 * Main header with the logo, the navigation links and the mobile buttons
 * on mobile the navigation links are hidden and the mobile buttons are shown
 * on desktop the navigation links are shown and the mobile buttons are hidden
 * the mobile buttons are a hamburger icon to open the drawer and a shopping bag icon
 */
const MainHeader: React.FC<{ className: string }> = ({ className }) => {
  return (
    <DialogRoot>
      <Wrapper className={className}>
        <WrapperLogo>Sole&Ankle</WrapperLogo>
        <NavLinks variant="navbar" />
        <MobileButtons />
        <Drawer />
      </Wrapper>
    </DialogRoot>
  );
};

const StyledMainHeader = styled(MainHeader)``;

export default StyledMainHeader;
