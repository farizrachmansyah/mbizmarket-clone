// import React from 'react'

const SectionWrapper = ({ children, title, isWhite = false }) => {
  return (
    <section className={`${!isWhite && 'bg-[#ededed]'} py-10 sm:py-[30px]`}>
      <div className="container">
        {title && <h1 className="sm:text-2xl mb-[14px] sm:mb-2.5 font-bold">{title}</h1>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
