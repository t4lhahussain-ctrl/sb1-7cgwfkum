import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Curved Orange Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#F28C28] via-[#E3963E] to-[#F69000]"
        style={{
          borderRadius: '0 0 50% 50% / 0 0 100px 100px'
        }}
      ></div>
      
      <div className="relative py-12 lg:py-20">
      {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Need Carpentry in <span className="text-orange-100">Blackburn</span>?
              <br />
              <span className="text-white">Call to Book Now!</span>
            </h1>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Doors, frames, skirting, cabinets & more – first & second fix carpentry services you can trust.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="tel:+441234567890" 
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone size={24} />
                Call Now
              </a>
              
              <button 
                onClick={onBookingClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Book Online
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-orange-100" />
                <span className="font-semibold">Free quotes</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-orange-100" />
                <span className="font-semibold">Trusted local carpenter</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-orange-100" />
                <span className="font-semibold">First & second fix</span>
              </div>
            </div>

            {/* Urgency Note */}
            <div className="mt-6 p-4 bg-white/15 border-l-4 border-orange-200 rounded-r-xl backdrop-blur-sm">
              <p className="text-white font-semibold">
                ⚡ Limited slots this week—call now!
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
              <img 
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional carpenter working on custom joinery" 
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Professional Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-orange-600">Available Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-xl shadow-lg border border-orange-200/30">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-orange-100 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-xl shadow-lg border border-orange-200/30">
            <div className="text-3xl font-bold text-white mb-2">24hr</div>
            <div className="text-orange-100 font-medium">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-xl shadow-lg border border-orange-200/30">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-orange-100 font-medium">Satisfaction Rate</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}