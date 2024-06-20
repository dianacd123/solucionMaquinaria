import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetail1 from './pages/ProductDetail1';
import ProductDetail2 from './pages/ProductDetail2';
import ProductDetail3 from './pages/ProductDetail3';
import ProductDetail4 from './pages/ProductDetail4';

function App() {
  return (
    <main className="h-screen bg-[#0B0A09]">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail1" element={<ProductDetail1 />} />
        <Route path="/ProductDetail2" element={<ProductDetail2 />} />
        <Route path="/ProductDetail3" element={<ProductDetail3 />} />
        <Route path="/ProductDetail4" element={<ProductDetail4 />} />
      </Routes>
    </BrowserRouter>
      
      
      
    </main>
  );
}

export default App;
