import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/Fonts/MONUMENT-Webfont/specimen_files/specimen_stylesheet.css'
import './assets/Fonts/MONUMENT-Webfont/stylesheet.css'

import Header from './common/Header';
import Home from '../src/pages/home/Home'
import Footer from './common/Footer';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
