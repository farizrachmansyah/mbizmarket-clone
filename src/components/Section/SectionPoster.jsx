import SectionWrapper from './SectionWrapper';

const SectionPoster = () => {
  return (
    <SectionWrapper isWhite>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
        <div className="flex-1 h-full">
          <a href="/" className="block w-full h-full rounded-md shadow-lg">
            <img src="https://via.placeholder.com/320" alt="Ad Image" className="w-full h-full object-cover" />
          </a>
        </div>

        <div className="flex-1 flex flex-col gap-1 sm:gap-2">
          <a href="/" className="block rounded-md shadow-lg">
            <img
              src="https://via.placeholder.com/320"
              alt="Ad Image"
              className="w-full h-full max-h-[170px] object-cover"
            />
          </a>
          <a href="/" className="block rounded-md shadow-lg">
            <img
              src="https://via.placeholder.com/320"
              alt="Ad Image"
              className="w-full h-full max-h-[170px] object-cover"
            />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionPoster;
