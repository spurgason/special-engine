import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Trainers from "./components/Trainers.jsx";
import Memberships from "./components/Memberships.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <div className="px-[5%] lg:container md:mx-auto">
        <About />
        <Services />
        <Memberships />
        <Trainers />

        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
