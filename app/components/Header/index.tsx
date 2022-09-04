import SuperHeader from "~/components/SuperHeader";
import MainHeader from "~/components/MainHeader";

const Header: React.FC = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
