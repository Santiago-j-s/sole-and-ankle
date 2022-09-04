import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import type { Shoes } from "~/routes/sale/$type";

const ShoeGrid: React.FC = () => {
  const shoes: Shoes = useLoaderData();
  useEffect(() => {
    console.log(shoes);
  }, []);

  return <div></div>;
};

export default ShoeGrid;
