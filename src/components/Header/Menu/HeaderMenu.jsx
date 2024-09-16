import { useState } from 'react';
import Logo from '../../Logo';
import HeaderMenuList from './HeaderMenuList';
import { menu } from '../../../menu';

const HeaderMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => setIsActive((prev) => !prev);

  const classMenuWrapper = 'fixed top-0 left-0 w-full h-full bg-[#00000080] transition-all duration-300';
  const classMenuPanel =
    'absolute top-0 left-0 h-screen min-w-[240px] overflow-y-auto bg-white shadow-lg transition-all duration-300';

  return (
    <div className={isActive ? `${classMenuWrapper}` : `opacity-0 pointer-events-none ${classMenuWrapper}`}>
      <div className="relative w-full h-full">
        <div className={isActive ? `${classMenuPanel}` : `-translate-x-full ${classMenuWrapper}`}>
          <div className="flex items-center justify-between gap-6 min-h-[56px] px-4">
            <a href="/" className="block">
              <Logo />
            </a>
            <button type="button" className="btn p-0 shadow-none border-none leading-[1]" onClick={closeMenu}>
              X
            </button>
          </div>

          {menu.map((item, i) => (
            <nav key={i}>
              <HeaderMenuList {...item} />
              {i < menu.length - 1 && <hr className="mx-4" />}
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
