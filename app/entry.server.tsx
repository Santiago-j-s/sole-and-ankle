import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

function getStyles(sheet: ServerStyleSheet) {
  let styles: string = "";

  try {
    styles = sheet.instance.toString();
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }

  return { styles };
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <RemixServer context={remixContext} url={request.url} />
    </StyleSheetManager>
  );

  try {
    const { styles } = getStyles(sheet);

    markup = markup.replace("</head>", `<style>${styles}</style></head>`);
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
