import React from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./utils/ScrollToTop";
import TermsConditions from "./pages/TermsConditions";
import CancellationRefund from "./pages/CancellationRefund";
import PricingPage from "./pages/PricingPage";
import FAQ from "./pages/FAQ";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <div
        className={`bg-background min-h-screen w-full overflow-x-hidden selection:bg-fuchsia-300 selection:text-fuchsia-900 pt-20  `}
      >
         <Header />
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route
              path="/cancellation-refund"
              element={<CancellationRefund />}
            />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
