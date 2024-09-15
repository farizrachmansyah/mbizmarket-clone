import { useState } from 'react';

const HeaderSupportingAcc = () => {
  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => setIsActive((prev) => !prev);

  let popupContent = null;
  if (isActive)
    popupContent = (
      <div className="absolute top-full right-0 w-[max-content] pt-4">
        <div className="px-8 py-4 rounded-xl shadow-[0_0_5px_2px_rgba(0,0,0,0.4)] text-center">
          <p className="mb-3 text-xs text-black font-bold">Selamat Datang!</p>
          <a href="" className="btn btn-primary w-[170px] text-sm">
            Masuk
          </a>
          <div className="line-through-el my-2.5 text-[#d3d3d3]">atau</div>
          <a href="" className="btn btn-primary-outline w-[170px] text-sm">
            Daftar
          </a>
        </div>
      </div>
    );

  return (
    <div className="relative">
      <button type="button" onClick={togglePopup} className="text-white text-xs font-bold">
        Akun
      </button>
      {popupContent}
    </div>
  );
};

export default HeaderSupportingAcc;
