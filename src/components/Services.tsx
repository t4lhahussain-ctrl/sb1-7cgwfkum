import React from 'react';
import { DoorOpen as Door, Home, Star as Stairs, AppWindow as Window, Wrench, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onBookingClick: () => void;
}

export default function Services({ onBookingClick }: ServicesProps) {
  const services = [
    {
      icon: Door,
      title: 'Doors & Frames',
      description: 'Custom door installation, repairs, and frame fitting for interior and exterior doors.',
      image: 'https://images.pexels.com/photos/3662857/pexels-photo-3662857.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Skirting & Architrave',
      description: 'Professional skirting board and architrave installation with perfect finishing.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Wrench,
      title: 'Kitchen Cabinets',
      description: 'Bespoke kitchen cabinet design, installation, and repair services.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Stairs,
      title: 'Staircases',
      description: 'Custom staircase construction, repairs, and handrail installation.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Window,
      title: 'Window Frames',
      description: 'Window frame installation, repairs, and custom wooden window solutions.',
      image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Custom Joinery',
      description: 'Bespoke furniture, built-in storage, and custom woodwork solutions.',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-[#F28C28]">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From first fix to finishing touches, we provide comprehensive carpentry and joinery services across Blackburn and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-orange-200/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <IconComponent size={24} className="text-[#F28C28]" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={onBookingClick}
                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Book this service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#F28C28] to-[#E3963E] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Don't see what you need?
            </h3>
            <p className="text-lg text-orange-100 mb-8">
              We handle all types of carpentry and joinery work. Get in touch to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+441234567890" 
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Call to discuss
              </a>
              <button 
                onClick={onBookingClick}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send us details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}