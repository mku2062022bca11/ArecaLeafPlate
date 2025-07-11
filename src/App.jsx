import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { BulkOrders } from './components/BulkOrders';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
     <Routes>
  <Route
    path="/"
    element={
      <>
        <Header />
        <Hero />
        <Features />
        <Products />
        <About />
        <Gallery />
        <BulkOrders />
        <Contact />
        <Footer />
      </>
    }
  />
  <Route path="/home" element={<Hero />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/features" element={<Features />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/bulkOrder" element={<BulkOrders />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/order-confirmation" element={<OrderConfirmation />} />
</Routes>

    </div>
  );
}

export default App;