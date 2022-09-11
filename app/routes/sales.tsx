import { Outlet } from "@remix-run/react";

export const handle = {
  breadcrumb: "sale",
};

export default function Route() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
