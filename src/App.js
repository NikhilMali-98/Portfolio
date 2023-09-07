import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import { loadFull} from 'tsparticles';
import Footer from './components/footer/Footer'
import particles from './utils.js/particles';
function App() {

    // for particle in home page only
    const location = useLocation();
    const renderParticleJsHomePage = location.pathname ==="/";

    // Particle event
  const handleInit =async(main)=>{
        await loadFull(main)
  }

  return (
    <section>
    <div className="App">
     
     {/* particle .js */}
    
     {
      renderParticleJsHomePage &&  <Particles id='particles' options={particles} init={handleInit}/>
     }

     {/* NavBar */}
     <Navbar/>

     {/* Main Page content */}
     <div className="App__main-page-content">
     <Routes>
        <Route index path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/resume' element ={<Resume/>}/>
        <Route path='/skills' element ={<Skills/>}/>
        <Route path='/portfolio' element ={<Portfolio/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
     </div>
    </div>
    <Footer/>
    </section>
  );
}

export default App;
