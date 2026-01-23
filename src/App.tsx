import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main className="w-full min-h-screen">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
