
import './App.css';
import Accessories from './components/Accessories';
import Bottom from './components/Bottom';
import BottomBanner from './components/BottomBanner';
import ImageSlider from './components/Carousel';
import Footer from './components/Footer';
import MediumNav from './components/MediumNav';
import MobFooter from './components/MobFooter';
import Navbar from './components/Navbar';
import SmallNav from './components/SmallNav';
import Sneakers from './components/Sneakers';
import StreetWear from './components/StreetWear';
import "./styles/Navbar.css";
function App() {
 
  return (
   <div className='App'>
    <div className="top">YEEZY MANIA IS LIVE | FREE SHIPPING PAN INDIA</div>
<Navbar />
<MediumNav />
<SmallNav />
<ImageSlider />
<Sneakers />
<StreetWear />
<Accessories />
<BottomBanner />
<Bottom />
<Footer />
<MobFooter />
   </div>
  );
}

export default App;
