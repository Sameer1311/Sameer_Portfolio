import About from "./components/About/page";
import Hero from "./components/Hero/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden  ">
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}
