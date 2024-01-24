import {Route, Routes} from "react-router-dom";


import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
//import Projects from './pages/Projects';
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/education" element={<EducationPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path='/experience' element={<ExperiencePage/>}/>
      </Routes>
<Footer />
    </>
  );
}

export default App;
