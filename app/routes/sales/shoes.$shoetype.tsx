import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import MainContent from "~/components/MainContent";
import shoes from "~/data/shoes";
import shoetypes from "~/data/shoetypes";

export const handle = {
  breadcrumb: "shoes",
};

export function loader({ params }: LoaderArgs) {
  const type = shoetypes.find((shoetype) => shoetype.slug === params.shoetype);

  return json({ shoes, shoetypes, type });
}

export default function Type() {
  return <MainContent />;
}
