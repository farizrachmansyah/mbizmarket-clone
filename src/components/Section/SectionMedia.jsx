import SectionWrapper from './SectionWrapper';
import CardMedia from '../Card/CardMedia';
import CarouselContainer from '../CarouselContainer';

const SectionMedia = () => {
  const media = [];
  for (let i = 0; i < 10; i++) {
    media.push(<CardMedia key={i} />);
  }

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    medium: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    small: {
      breakpoint: { max: 768, min: 480 },
      items: 3
    },
    extraSmall: {
      breakpoint: { max: 480, min: 0 },
      items: 2
    }
  };

  return (
    <SectionWrapper title="Liputan Media & Info Bisnis">
      <CarouselContainer responsive={responsive}>
        {media.map((item, i) => (
          <div key={i} className="p-1">
            {item}
          </div>
        ))}
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default SectionMedia;
