import {Route, Routes} from "react-router-dom";


import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import Projects from './pages/Projects';
import Experience from "./pages/Experience";

function App() {
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/education" element={<EducationPage />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
<Footer />
    </>
  );
}

export default App;
