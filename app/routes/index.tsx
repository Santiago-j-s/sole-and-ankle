import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return redirect("/sales/shoes/lifestyle", {
    status: 307,
    headers: {
      "Cache-Control": "max-age=300, stale-while-revalidate=3600",
    },
  });
};
