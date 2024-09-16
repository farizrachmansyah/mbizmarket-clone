import SectionWrapper from './SectionWrapper';
import CardProduct from '../Card/CardProduct';
import CarouselContainer from '../CarouselContainer';

const SectionCategory = ({ title, productData }) => {
  const products = [];
  for (let i = 0; i < productData; i++) {
    products.push(<CardProduct key={i} />);
  }

  const categoryResponsive = {
    medium: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4
    },
    small: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3
    },
    extraSmall: {
      breakpoint: { max: 1024, min: 0 },
      items: 2
    }
  };

  return (
    <SectionWrapper title={title}>
      <div className="grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-1 max-h-[365px]">
          <a href="" className="block h-full shadow-md">
            <img src="https://via.placeholder.com/300" alt="" className="w-full h-full object-cover" />
          </a>
        </div>
        <div className="lg:col-span-2">
          <CarouselContainer responsive={categoryResponsive} className="w-full">
            {products.map((item, i) => (
              <div key={i} className="p-1">
                {item}
              </div>
            ))}
          </CarouselContainer>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionCategory;
