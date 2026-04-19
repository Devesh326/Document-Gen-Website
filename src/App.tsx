import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import {PrivacyPolicy} from "./pages/PrivacyPolicy";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
