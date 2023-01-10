import logo from './logo.svg';
import  Navbar from './component/navbar';
import Section from './component/section';
import './App.css';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      {/* <Section/> */}
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
