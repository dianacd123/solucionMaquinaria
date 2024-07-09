import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail1 from "./pages/ProductDetail1";
import ProductDetail2 from "./pages/ProductDetail2";
import ProductDetail3 from "./pages/ProductDetail3";
import ProductDetail4 from "./pages/ProductDetail4";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Asegúrate de agregar esto */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail1" element={<ProductDetail1 />} />
        <Route path="/ProductDetail2" element={<ProductDetail2 />} />
        <Route path="/ProductDetail3" element={<ProductDetail3 />} />
        <Route path="/ProductDetail4" element={<ProductDetail4 />} />
      </Routes>
    </Router>
  );
};

export default App;
