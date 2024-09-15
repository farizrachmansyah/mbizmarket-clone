// import React from 'react'

const HeaderMainCart = () => {
  return (
    <button type="button" className="relative ml-auto md:ml-0 md:order-2 pt-2.5 pr-2.5">
      <span>Cart</span>
      <span className="absolute top-0 right-0 flex items-center justify-center h-[20px] min-w-[20px] px-[6px] rounded-[10px] bg-primary text-xs text-white">
        0
      </span>
    </button>
  );
};

export default HeaderMainCart;
