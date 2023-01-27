import logo from './logo.svg';
import biceps from './biceps.png';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import BackgroundElements from './components/BackgroundElements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <BackgroundElements/>
      <Footer/>
    </div>
  );
}

export default App;
