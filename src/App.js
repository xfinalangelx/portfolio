import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import Portfolio from "./components/Portfolio"
import ScrollDown from './components/scroll-down.component'
import About from './components/about.component'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";


function App() {
  return (
    <>
     <div className="App" style={{position:"relative"}}>

     
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable: true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color: "#ffe27e"
            }
          }
        }
      }}
    />
      <Navbar />
      <Header />
      <ScrollDown/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/bg.webp")}
          bgImageAlt=""
          strength={-200}
        >
         <div>
            <Container className="container-box rounded">
        <Fade duration={500}>
        <About/>
        </Fade>
            </Container>
        </div>
        </Parallax>
      </div>
      </div>
    </>
  );
}

export default App;
