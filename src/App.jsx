import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Providers from "./Components/Providers";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";
import Styles from "./Style";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <div className={`${Styles.backgroundBase} ${Styles.paddingX} ${Styles.paddingX} `}>
      <div className="">
        <AnimatedCursor />
        <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="sections">
        <Stats />
        <About />
        <Features />
        <Pricing />
        <Providers />
        {/* <Testimonials /> */}
      </div>

      <footer className="mt-20">
        <Footer />
      </footer>

    </div>
  );
};

export default App;