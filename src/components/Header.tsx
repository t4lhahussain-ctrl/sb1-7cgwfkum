import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#F28C28] to-[#E3963E] p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#F28C28] to-[#E3963E] rounded transform rotate-45"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-tight">HORIZON</h1>
                  <p className="text-xs text-orange-100 leading-tight">CARPENTRY & JOINERY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-[#F28C28] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-[#F28C28] transition-colors font-medium"
            >
              Contact
            </button>
            <a 
              href="tel:+441234567890" 
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D2B48C]/30">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-700 hover:text-[#F28C28] transition-colors py-2 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-[#F28C28] transition-colors py-2 font-medium"
              >
                Contact
              </button>
              <a 
                href="tel:+441234567890" 
                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}