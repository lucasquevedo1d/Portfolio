import { useEffect, useState } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { CircularProgress } from "@mui/material";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { Section } from "./styled";

function App() {
  
  return (
 
      <>
       <Section id={"Home"}>
      <Header/>
      <Home/>
      </Section>
      <Section id={"About"}>
       <About/>
      </Section>
      <Section id={"Projects"}>
        <Projects/>
      </Section>
      <Section id={"Skills"}>
        <Skills />
      </Section>
      <Section id={"Contact"}>
        <Contact/>
      </Section>
      </>
  );
}

export default App;
