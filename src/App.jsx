import Header from './components/Header/Header';
import HeaderMenu from './components/Header/Menu/HeaderMenu';
import SectionNewProduct from './components/Section/SectionNewProduct';
import SectionPoster from './components/Section/SectionPoster';
import SectionFeature from './components/Section/SectionFeature';
import SectionCategory from './components/Section/SectionCategory';
import SectionPartnership from './components/Section/SectionPartnership';
import SectionExcellence from './components/Section/SectionExcellence';
import SectionMedia from './components/Section/SectionMedia';
import SectionWords from './components/Section/SectionWords';

function App() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <main>
        <SectionNewProduct />
        <SectionPoster />
        <SectionFeature />
        <SectionCategory title="Laptop" productData={10} />
        <SectionCategory title="Furniture Kantor" productData={10} />
        <SectionCategory title="Perlengkapan Elektronik" productData={10} />
        <SectionPartnership />
        <SectionExcellence />
        <SectionMedia />
        <SectionWords />
      </main>
    </>
  );
}

export default App;
