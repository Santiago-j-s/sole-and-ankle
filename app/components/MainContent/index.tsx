import MainContentHeader from "../MainContentHeader";
import ShoeGrid from "../ShoeGrid";
import Sidebar from "../Sidebar";

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
