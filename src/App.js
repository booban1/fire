import logo from './logo.svg';
import biceps from './biceps.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weekly Member Perfomance rating
        </p>
        <img src={biceps} className="App-logo" alt="logo" />
        <hr />
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
