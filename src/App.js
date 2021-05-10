import React from 'react';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.component";
import About from "./pages/about/about.component"
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experiences/experience.component";
import ContactForm from "./pages/contact-form/contactform.component";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container"


import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      {/*About me section*/}
      <div>
        <Parallax blur={{ min: -30, max:30}}bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
        <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
    </div>);
};

export default App;
