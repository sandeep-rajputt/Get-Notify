import React from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen w-full overflow-x-hidden pt-20">
        <Header />
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
