import SectionWrapper from './SectionWrapper';
import CardPartnership from '../Card/CardPartnership';
import CarouselContainer from '../CarouselContainer';

const SectionPartnership = () => {
  const partnerships = [];
  for (let i = 0; i < 10; i++) {
    partnerships.push(<CardPartnership key={i} />);
  }

  const responsive = {
    medium: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    small: {
      breakpoint: { max: 1024, min: 480 },
      items: 3
    },
    extraSmall: {
      breakpoint: { max: 480, min: 0 },
      items: 2
    }
  };

  return (
    <SectionWrapper title="Kerjasama Mbizmarket">
      <CarouselContainer responsive={responsive}>
        {partnerships.map((item, i) => (
          <div key={i} className="p-1">
            {item}
          </div>
        ))}
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default SectionPartnership;
