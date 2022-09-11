import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { PropsWithChildren } from "react";
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

function Document({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStyles />
        <GlobalVariables />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <MainLayout />
    </Document>
  );
}
