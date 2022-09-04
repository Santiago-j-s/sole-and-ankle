import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import MainContent from "~/components/MainContent";
import shoes from "~/data/shoes";

export const loader: LoaderFunction = () => {
  return json(shoes);
};

export type Shoes = typeof loader;

export default function Type() {
  return <MainContent />;
}
