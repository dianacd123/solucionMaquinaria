import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <main className="h-screen bg-[#0B0A09]">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
      
      
      
    </main>
  );
}

export default App;
