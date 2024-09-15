import HeaderSupporting from './Supporting/HeaderSupporting';
import HeaderMain from './Main/HeaderMain';

const Header = () => {
  return (
    <header className="shadow-[0_1px_8px_0_rgba(0,0,0,0.25)]">
      <HeaderSupporting />
      <HeaderMain />
    </header>
  );
};

export default Header;
