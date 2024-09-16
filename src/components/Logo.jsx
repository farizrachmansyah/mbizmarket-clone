import LogoImage from '../assets/img/mbizmarket-logo.webp';

const Logo = () => {
  return (
    <div className="block max-w-[130px] md:max-w-[170px]">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
