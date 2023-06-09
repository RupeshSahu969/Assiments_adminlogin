import logo from './logo.svg';
import './App.css';
import AllRouter from './Routes/AllRouter';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter/>
    </div>
  );
}

export default App;
