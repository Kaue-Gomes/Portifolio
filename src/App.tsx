
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projetcts from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';



const ModernPortfolioLanding = () => {
  return (
     <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
       <Header />
     <HeroSection />
      <About />
       <Skills />
      <Projetcts />
      <Process />
     <Contact />
     <Footer />
    </div>
  );
};

export default ModernPortfolioLanding;