import About from "./components/About/page";
import Hero from "./components/Hero/page";
import NavBar from "./components/Navbar/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden  ">
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}
