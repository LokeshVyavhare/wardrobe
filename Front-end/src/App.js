import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Landing } from './Components/Landing/Landing';
import { Navbar } from './Components/Navbar/Navbar';
import {Router} from './Components/Router/Router'

function App() {
  return (
    <div className="App">
      <Landing/>
      {/* <Navbar />
      <Router />
      <Footer /> */}
    </div>
  );
}

export default App;
