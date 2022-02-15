import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
