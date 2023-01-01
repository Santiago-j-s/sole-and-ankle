import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@remix-run/react";
import styled from "styled-components";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import NavLinks from "./NavLinks";

export const Content = styled(Dialog.Content)`
  --padding: 32px;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: var(--gray-900);
  background: white;

  width: 300px;
  height: 100%;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const WrapperNavLinks = styled(NavLinks)`
  padding: var(--padding);
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;
  margin: var(--padding);
  margin-top: auto;

  a {
    text-decoration: none;
    color: var(--gray-700);

    font-size: ${14 / 16}rem;
    font-style: normal;
    font-weight: var(--font-weight-normal);
    line-height: ${16 / 16}rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ButtonIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const DrawerOverlay = styled(Dialog.Overlay)`
  background-color: var(--gray-900);

  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

/**
 * Drawer with a cross icon to close it
 * a list of links
 * and at the end a link to
 * - Terms and Conditions
 * - Privacy Policy
 * - Contact Us
 */
const Drawer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Dialog.Portal>
      <DrawerOverlay />
      <Content className={className}>
        <Dialog.Close asChild>
          <CloseButton>
            <ButtonIcon icon="X" />
          </CloseButton>
        </Dialog.Close>
        <WrapperNavLinks variant="drawer" />
        <Footer>
          <Link prefetch="intent" to="/terms">
            Terms and Conditions
          </Link>
          <Link prefetch="intent" to="/privacy">
            Privacy Policy
          </Link>
          <Link prefetch="intent" to="/contact">
            Contact Us
          </Link>
        </Footer>
      </Content>
    </Dialog.Portal>
  );
};

const StyledDrawer = styled(Drawer)``;

export default StyledDrawer;
