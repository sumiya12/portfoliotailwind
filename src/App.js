import Header from "./components/Header";
import Banner from "./components/Banner";
import ProjectsSection from "./components/ProjectsSection";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#080808] w-screen min-h-screen">
      <Header  />
      <Banner name="home" />
      <ProjectsSection />
      <Experiences/>
      <Contact/>

    </div>
  );
}

export default App;
