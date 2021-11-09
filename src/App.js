import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import AboutSection from './LandingPage/AboutSection';
import BuyStrip from './LandingPage/BuyStrip';
import Footer from './LandingPage/Footer';
import Header from './LandingPage/Header';
import HeroSection from './LandingPage/HeroSection';
import RoadMap from './LandingPage/RoadMap';
import SpecSection from './LandingPage/SpecSection';
import Team from './LandingPage/Team';
function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <BuyStrip/>
      <SpecSection/>
      <RoadMap/>
      <SpecSection/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
