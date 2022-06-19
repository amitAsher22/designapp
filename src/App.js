import SectionOne from "./components/section1/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionTree from "./components/section3/SectionTree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/section5/SectionFive";
import SectionSix from "./components/section6/SectionSix";
import Sectionseven from "./components/section7/Sectionseven";




import '../src/App.css'



function App() {
  return (
    <div className="app">
      <SectionOne/>
      <SectionTwo/>
      <SectionTree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <Sectionseven/>
    </div>
  );
}

export default App;
