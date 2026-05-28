import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import CookieBanner from "./components/CookieBanner";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import { LangProvider } from "./context/LangContext";
import CategoryPage from "./pages/CategoryPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // Elemento non ancora nel DOM (navigazione da un'altra rotta):
    // aspetta il render e riprova
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <About />
        {/* <Testimonials /> */}
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <CookieBanner />
        <FloatingButtons />
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
