import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: ${340 / 16}rem;
  flex: 1;
`;

const ImageWrapper = styled.div`
  border-radius: ${16 / 16}rem ${16 / 16}rem ${4 / 16}rem ${4 / 16}rem;
  background-color: #f6f5f6;
`;

const Image = styled.img`
  width: 100%;
`;

const NewLabel = styled.span<{ type: "new" | "sale" }>`
  position: absolute;
  top: ${16 / 16}rem;
  right: ${-4 / 16}rem;

  background-color: ${(props) =>
    props.type === "new" ? "var(--secondary)" : "var(--primary)"};
  color: var(--white);

  padding: ${7 / 16}rem ${9 / 16}rem;

  font-weight: var(--font-weight-medium);
  font-size: ${14 / 16}rem;

  border-radius: ${2 / 16}rem;
`;

const SalePriceLabel = styled.span`
  color: var(--primary);
`;

const BasicInfo = styled.p`
  display: flex;
  justify-content: space-between;
  color: var(--gray-900);
  margin-top: ${14 / 16}rem;
`;

const ExtraInfo = styled.p`
  display: flex;
  justify-content: space-between;
  color: var(--gray-700);
`;

const OldPrice = styled.s`
  color: var(--gray-700);
`;

interface ShoePriceProps {
  price: number;
  onSale: boolean;
}

export const PriceLabel: React.FC<ShoePriceProps> = ({ price, onSale }) => {
  if (onSale) {
    return <OldPrice>{price}</OldPrice>;
  }

  return <>{price}</>;
};

interface ShoeProps {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: number;
  numOfColors: number;
}

export const Shoe: React.FC<ShoeProps> = ({
  name,
  imageSrc,
  price,
  salePrice,
  numOfColors,
  releaseDate,
}) => {
  const oneHour = 1000 * 60 * 60 * 24;
  const justReleased = new Date().getTime() - releaseDate < oneHour;
  const onSale = salePrice !== null;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageSrc} alt={name} />
      </ImageWrapper>
      {justReleased && <NewLabel type="new">Just Released!</NewLabel>}
      {onSale && <NewLabel type="sale">Sale</NewLabel>}
      <BasicInfo>
        <span>{name}</span>
        <PriceLabel price={price} onSale={onSale} />
      </BasicInfo>
      <ExtraInfo>
        <span>
          {numOfColors} Color{numOfColors > 1 ? "s" : ""}
        </span>
        {onSale && <SalePriceLabel>${salePrice}</SalePriceLabel>}
      </ExtraInfo>
    </Wrapper>
  );
};
