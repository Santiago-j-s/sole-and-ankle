import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/sales/shoes/lifestyle", {
    status: 307,
    headers: {
      "Cache-Control": "max-age=300, stale-while-revalidate=3600",
    },
  });
}
