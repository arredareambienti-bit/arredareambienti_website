import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import { LangProvider, useLang } from "./context/LangContext";
import { useT } from "./i18n/useT";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import CookieBanner from "./components/CookieBanner";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
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
    // Element not yet in the DOM (navigation from another route):
    // wait for render and retry
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

function HomePage() {
  const t = useT();
  const { lang } = useLang();
  useEffect(() => {
    const url = "https://arredareambienti.it/";
    document.title = t("page_title_home");
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta_desc_home"));
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="it"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="en"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="x-default"]')?.setAttribute("href", url);
  }, [lang, t]);

  return (
    <>
      <a href="#main-content" className="skip-link">Salta al contenuto</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Categories />
        <About />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieBanner />
        <FloatingButtons />
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
