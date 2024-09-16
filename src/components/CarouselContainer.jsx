import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = ({ children, responsive }) => {
  return (
    <Carousel responsive={responsive} swipeable draggable infinite>
      {children}
    </Carousel>
  );
};

export default CarouselContainer;
