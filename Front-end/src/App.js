import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Product } from "./Components/Product/Product";
import { Router } from "./Components/Router/Router";
import './App.css';
import  Footer  from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import {Router} from './Components/Router/Router'

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Router />
      <Footer /> */}
      <Product />
    </div>
  );
}

export default App;
