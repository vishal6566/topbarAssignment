
import './App.css';
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
   </div>
  );
}

export default App;
