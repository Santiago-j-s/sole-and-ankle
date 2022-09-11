import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/sales/shoes/lifestyle", 307);
}
