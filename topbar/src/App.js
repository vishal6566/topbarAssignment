
import './App.css';
import Accessories from './components/Accessories';
import ImageSlider from './components/Carousel';
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
   </div>
  );
}

export default App;
