import {
  Navbar,
  Main,
  Footer,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./components";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gradient-to-r from-primaryOrange/[.30] to-primaryOrangeDark/[.30]">
        <Main />
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
