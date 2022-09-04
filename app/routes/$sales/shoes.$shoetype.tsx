import { json } from "@remix-run/node";
import MainContent from "~/components/MainContent";
import shoes from "~/data/shoes";
import shoetypes from "~/data/shoetypes";

export const handle = {
  breadcrumb: "shoes",
};

export function loader() {
  return json({ shoes, shoetypes });
}

export default function Type() {
  return <MainContent />;
}
