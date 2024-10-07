import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <About />
      <Projects />
    </BrowserRouter>
  );
}

export default App;
