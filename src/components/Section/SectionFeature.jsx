import SectionWrapper from './SectionWrapper';
import CardFeature from '../Card/CardFeature';
import CarouselContainer from '../CarouselContainer';

const SectionFeature = () => {
  const features = [];
  for (let i = 0; i < 10; i++) {
    features.push(<CardFeature key={i} />);
  }

  const featureResponsive = {
    medium: {
      breakpoint: { max: 3000, min: 640 },
      items: 3
    },
    small: {
      breakpoint: { max: 640, min: 480 },
      items: 2
    },
    extraSmall: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  return (
    <SectionWrapper title="Kemudahan Berbelanja di Mbizmarket" isWhite>
      <CarouselContainer responsive={featureResponsive}>
        {features.map((item, i) => (
          <div key={i} className="p-1">
            {item}
          </div>
        ))}
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default SectionFeature;
