import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="font-[SF_Pro]">
      <Navbar/>
      <Hero/>
      {/* <Main/> */}
      <Footer/>
    </div>
  );
}

export default App;
