import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import GlobalStyles from "~/components/GlobalStyles";
import GlobalVariables from "~/components/GlobalVariables";
import MainLayout from "~/components/MainLayout";
import sales from "~/data/sales";
import fonts from "~/styles/fonts.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: fonts }];
};

export const handle = {
  breadcrumb: "home",
};

export function loader() {
  return json({ sales });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <GlobalStyles />
        <GlobalVariables />
        <MainLayout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
