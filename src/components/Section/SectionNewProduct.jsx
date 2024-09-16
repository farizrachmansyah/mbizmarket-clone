import SectionWrapper from './SectionWrapper';
import CardProduct from '../Card/CardProduct';
import CarouselContainer from '../CarouselContainer';

const SectionNewProduct = () => {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push(<CardProduct key={i} />);
  }

  const productResponsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6
    },
    large: {
      breakpoint: { max: 1200, min: 1024 },
      items: 5
    },
    medium: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    small: {
      breakpoint: { max: 768, min: 640 },
      items: 3
    },
    extraSmall: {
      breakpoint: { max: 640, min: 0 },
      items: 2
    }
  };

  return (
    <SectionWrapper title="Produk Terbaru di Mbizmarket">
      <CarouselContainer responsive={productResponsive}>
        {products.map((item, i) => (
          <div key={i} className="p-1">
            {item}
          </div>
        ))}
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default SectionNewProduct;
