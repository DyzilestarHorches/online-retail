import "./App.css";
import Header from "./Header";
import Home from "./Home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
