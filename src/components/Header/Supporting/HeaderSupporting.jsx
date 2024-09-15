import HeaderSupportingAcc from './HeaderSupportingAcc';

const HeaderSupporting = () => {
  return (
    <div className="hidden md:block py-2 bg-primary">
      <div className="container flex items-center justify-between text-white text-xs font-bold">
        <div className="flex gap-1">
          <a href="https://www.mbizmarket.co.id/cara-berjualan" target="_blank" rel="noopener noreferrer">
            Panduan Berjualan
          </a>
          <span>|</span>
          <a href="https://www.mbizmarket.co.id/cara-transaksi" target="_blank" rel="noopener noreferrer">
            Panduan Berbelanja
          </a>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2.5">
            <label htmlFor="langSwitcher">Bahasa</label>
            <select name="langSwitcher" id="langSwitcher">
              <option value="id">Indonesia - ID</option>
              <option value="en">English - EN</option>
            </select>
          </div>
          <div className="flex gap-4">
            <a href="https://www.mbizmarket.co.id/kontak" target="_blank" rel="noopener noreferrer">
              Bantuan
            </a>
            <HeaderSupportingAcc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSupporting;
