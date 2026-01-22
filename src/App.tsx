import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  const handleBookingClick = () => {
    setIsBookingFormVisible(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormVisible(false);
  };

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero onBookingClick={handleBookingClick} />
      <Services onBookingClick={handleBookingClick} />
      <Contact onBookingClick={handleBookingClick} />
      <Footer />
      <BookingForm 
        isVisible={isBookingFormVisible} 
        onClose={handleCloseBookingForm} 
      />
    </div>
  );
}

export default App;