import Logo from '../../Logo';
import HeaderMainCart from './HeaderMainCart';

const HeaderMain = () => {
  return (
    <div className="py-4 bg-white">
      <div className="container flex flex-wrap items-center gap-2.5 md:gap-6">
        <Logo />
        <HeaderMainCart />
        <div className="w-full md:w-auto md:order-1 md:flex-1 flex gap-3 max-w-[838px]">
          <button type="button" className="md:hidden text-primary">
            Menu
          </button>
          <div className="flex-1 flex">
            <input
              type="text"
              name="search"
              id="searchInput"
              placeholder="Cari Produk / Toko"
              className="flex-1 px-3.5 py-2.5 rounded-l-md outline-none border border-r-0 border-[#0000003b] bg-[#f9f9f9] text-[#979797] text-sm leading-[1]"
            />
            <button
              type="button"
              className="btn btn-primary shadow-none rounded-l-none rounded-r-md text-sm leading-[1]"
            >
              S
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
