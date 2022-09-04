import MainContentHeader from "~/components/MainContentHeader";
import ShoeGrid from "~/components/ShoeGrid";
import Sidebar from "~/components/Sidebar";

const MainContent: React.FC = () => {
  return (
    <main>
      <MainContentHeader />
      <Sidebar />
      <ShoeGrid />
    </main>
  );
};

export default MainContent;
