import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import Portfolio from "./components/Portfolio"
import ScrollDown from './components/scroll-down.component'

function App() {
  return (
    <>
     
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
    </>
  );
}

export default App;
