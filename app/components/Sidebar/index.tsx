import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/sale/$shoetype";

const Sidebar: React.FC = () => {
  const { shoetypes } = useLoaderData<typeof loader>();

  return (
    <aside>
      {shoetypes.map((shoetype) => (
        <Link key={shoetype.slug} to={shoetype.slug}>
          {shoetype.text}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
