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
import { useEffect } from "react";
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

/**
 * This is a custom hook that adjusts the background color of the document
 * element based on the scroll position.
 *
 * This is done to fix overscrolling (scrolling past the top or bottom of the
 * page). When overscrolling, the background color of the
 * document element is visible.
 *
 * This hook ensures that the background color of the document element
 * blends in with the background color of the page.
 */
function useAdjustBackgroundColor() {
  useEffect(() => {
    const htmlElement = document.documentElement;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        htmlElement.style.backgroundColor = "var(--background-color)";
      } else {
        htmlElement.style.backgroundColor = "var(--background-color-secondary)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function Document({ children }: PropsWithChildren<{}>) {
  useAdjustBackgroundColor();

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
