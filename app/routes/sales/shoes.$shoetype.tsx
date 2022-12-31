import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import MainContent from "~/components/MainContent";
import shoes from "~/data/shoes";
import shoetypes from "~/data/shoetypes";

export type Shoes = typeof shoes;
export type Shoe = Shoes[number];

function sortByReleaseDate(shoe1: Shoe, shoe2: Shoe) {
  if (shoe1.releaseDate < shoe2.releaseDate) return 1;
  if (shoe1.releaseDate > shoe2.releaseDate) return -1;
  return 0;
}

function sortByPrice(shoe1: Shoe, shoe2: Shoe) {
  const shoe1Price = shoe1.salePrice || shoe1.price;
  const shoe2Price = shoe2.salePrice || shoe2.price;

  if (shoe1Price < shoe2Price) return -1;
  if (shoe1Price > shoe2Price) return 1;

  return 0;
}

function sort(sortBy: string | null, shoes: Shoes) {
  let sortedShoes = shoes;

  switch (sortBy) {
    case "price":
      sortedShoes = shoes.sort(sortByPrice);
      break;

    case "newest-releases":
      sortedShoes = shoes.sort(sortByReleaseDate);
      break;

    default:
      break;
  }

  return sortedShoes;
}

export const handle = {
  breadcrumb: "shoes",
};

export function loader({ params, request }: LoaderArgs) {
  const type = shoetypes.find((shoetype) => shoetype.slug === params.shoetype);

  const url = new URL(request.url);

  const sortBy = url.searchParams.get("sort");

  return json({ shoes: sort(sortBy, shoes), shoetypes, type });
}

export default function Type() {
  return <MainContent />;
}
