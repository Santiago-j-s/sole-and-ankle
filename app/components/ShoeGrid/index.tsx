import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import type { loader } from "~/routes/$sales/shoes.$shoetype";

const ShoeGrid: React.FC = () => {
  const { shoes } = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log(shoes);
  }, [shoes]);

  return <div></div>;
};

export default ShoeGrid;
