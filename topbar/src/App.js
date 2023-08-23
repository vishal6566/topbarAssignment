
import './App.css';
import Accessories from './components/Accessories';
import Bottom from './components/Bottom';
import BottomBanner from './components/BottomBanner';
import ImageSlider from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sneakers from './components/Sneakers';
import StreetWear from './components/StreetWear';

function App() {
  return (
   <div className='App'>
<Navbar />
<ImageSlider />
<Sneakers />
<StreetWear />
<Accessories />
<BottomBanner />
<Bottom />
<Footer />
   </div>
  );
}

export default App;
