import "./App.css";
import Navbar from "./componentes/Navbar";
import AboutUs from "./pages/AboutUs";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/about" element={<Navigate to={"/aboutus"} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/contact" element={<Navigate to={"/contacto"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
