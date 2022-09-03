import Header from "~/components/Header";
import MainContent from "~/components/MainContent";
import SuperHeader from "~/components/SuperHeader";

export default function Index() {
  return (
    <div>
      <SuperHeader />
      <Header />
      <MainContent />
    </div>
  );
}
