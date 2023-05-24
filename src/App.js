import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  
  return (
 
      <>
       <section id={"Home"}>
      <Header/>
      <Home/>
      </section>
      <section id={"About"}>
       <About/>
      </section>
      <section id={"Projects"}>
        <Projects/>
      </section>
      <section id={"Skills"}>
        <Skills />
      </section>
      <section id={"Contact"}>
        <Contact/>
      </section>
      </>
  );
}

export default App;
