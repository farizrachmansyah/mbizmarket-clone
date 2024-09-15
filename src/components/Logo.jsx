import LogoImage from '../assets/img/mbizmarket-logo.webp';

const Logo = () => {
  return (
    <a href="/" className="block max-w-[130px] md:max-w-[170px]">
      <img src={LogoImage} alt="Logo" />
    </a>
  );
};

export default Logo;
