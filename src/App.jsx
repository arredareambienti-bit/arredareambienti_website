import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <About />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
