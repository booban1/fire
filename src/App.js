import logo from './logo.svg';
import biceps from './biceps.png';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Body/>
       <BackgroundElements/>
    </div>
  );
}

export default App;
