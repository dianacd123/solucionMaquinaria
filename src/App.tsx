import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
        <Route path="/retroexcavadora-caterpillar-420f-2024" element={<ProductDetail1 />} />
        <Route path="/excavadora-caterpillar-320-2024" element={<ProductDetail2 />} />
        <Route path="/retroexcavadora-caterpillar-416f-2024" element={<ProductDetail3 />} />
        <Route path="/excavadora-caterpillar-320e-2024" element={<ProductDetail4 />} />
      </Routes>
    </Router>
  );
};

export default App;

