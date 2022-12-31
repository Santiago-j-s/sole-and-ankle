import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 0 300px;
`;

const ImageWrapper = styled.div`
  border-radius: ${16 / 16}rem ${16 / 16}rem ${4 / 16}rem ${4 / 16}rem;
  background-color: #f6f5f6;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 312px;
  object-fit: contain;
`;

const Flag = styled.span`
  position: absolute;
  top: ${16 / 16}rem;
  right: ${-4 / 16}rem;

  background-color: var(--sale-color);
  color: var(--white);

  padding: ${7 / 16}rem ${9 / 16}rem;

  font-weight: var(--font-weight-medium);
  font-size: ${14 / 16}rem;

  border-radius: ${2 / 16}rem;
`;

const SaleFlag = styled(Flag)`
  --sale-color: var(--primary);
`;

const NewFlag = styled(Flag)`
  --sale-color: var(--secondary);
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
  price: string;
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

function formatPrice(price: number | null) {
  if (price === null) {
    return "";
  }

  return `$${price / 100}`;
}

export const Shoe: React.FC<ShoeProps> = ({
  name,
  imageSrc,
  price,
  salePrice,
  numOfColors,
  releaseDate,
}) => {
  const thirtyDays = 1000 * 60 * 60 * 24 * 30;
  const justReleased = new Date().getTime() - releaseDate < thirtyDays;

  const onSale = salePrice !== null;

  const justReleasedVariant = justReleased ? "just-released" : "default";
  const variant = onSale ? "on-sale" : justReleasedVariant;

  const formattedPrice = formatPrice(price);
  const formattedSalePrice = formatPrice(salePrice);

  const colorText =
    numOfColors === 1 ? `${numOfColors} Color` : `${numOfColors} Colors`;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          width="100%"
          height="312"
          src={imageSrc}
          alt={name}
          loading="lazy"
        />
      </ImageWrapper>
      {variant === "just-released" && <NewFlag>Just Released!</NewFlag>}
      {variant === "on-sale" && <SaleFlag>Sale</SaleFlag>}
      <BasicInfo>
        <span>{name}</span>
        <PriceLabel price={formattedPrice} onSale={onSale} />
      </BasicInfo>
      <ExtraInfo>
        <span>{colorText}</span>
        {onSale && <SalePriceLabel>{formattedSalePrice}</SalePriceLabel>}
      </ExtraInfo>
    </Wrapper>
  );
};
