import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();

  let markup: string = "";
  let styles: string = "";

  try {
    markup = renderToString(
      sheet.collectStyles(
        <RemixServer context={remixContext} url={request.url} />
      )
    );
    styles = sheet.getStyleTags();
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }

  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
