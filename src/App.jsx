import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookieBanner from "./components/CookieBanner";
import FloatingButtons from "./components/FloatingButtons";
import "./App.css";

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
