import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import variables from './variables.scss'

function App() {
  return (
    <div className="App">
      <Navbar title="My Blog"/>
      <Home/>
    </div>
  );
}

export default App;