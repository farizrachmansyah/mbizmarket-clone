import SectionWrapper from './SectionWrapper';
import CardExcellence from '../Card/CardExcellence';
import CarouselContainer from '../CarouselContainer';

const SectionExcellence = () => {
  const excellence = [];
  for (let i = 0; i < 10; i++) {
    excellence.push(<CardExcellence key={i} />);
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
        {excellence.map((item, i) => (
          <div key={i} className="p-1">
            {item}
          </div>
        ))}
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default SectionExcellence;
