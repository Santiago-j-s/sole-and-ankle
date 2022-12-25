import { DialogTrigger } from "@radix-ui/react-dialog";
import styled from "styled-components";
import { QUERIES } from "~/breakpoints";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const MobileButtonsWrapper = styled.ul`
  gap: 24px;

  margin-left: auto;

  display: none;
  @media (${QUERIES.tabletAndSmaller}) {
    display: flex;
  }
`;

const ButtonIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const MobileButtons: React.FC = () => {
  return (
    <MobileButtonsWrapper>
      <UnstyledButton>
        <ButtonIcon icon="ShoppingBag" />
      </UnstyledButton>
      <UnstyledButton>
        <ButtonIcon icon="Search" />
      </UnstyledButton>
      <DialogTrigger asChild>
        <UnstyledButton>
          <ButtonIcon icon="Menu" />
        </UnstyledButton>
      </DialogTrigger>
    </MobileButtonsWrapper>
  );
};
