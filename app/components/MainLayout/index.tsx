import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}