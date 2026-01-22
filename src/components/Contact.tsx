import React from 'react';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

interface ContactProps {
  onBookingClick: () => void;
}

export default function Contact({ onBookingClick }: ContactProps) {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-[#F28C28]">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your carpentry project? Contact us today for a free quote and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100/60 p-3 rounded-xl">
                    <Phone className="text-[#F28C28]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <a href="tel:+441234567890" className="text-[#F28C28] hover:text-slate-800 font-medium">
                      01234 567 890
                    </a>
                    <p className="text-sm text-slate-600">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100/60 p-3 rounded-xl">
                    <Mail className="text-[#F28C28]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <a href="mailto:info@horizoncarpentry.co.uk" className="text-[#F28C28] hover:text-slate-800 font-medium">
                      info@horizoncarpentry.co.uk
                    </a>
                    <p className="text-sm text-slate-600">Send us your project details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100/60 p-3 rounded-xl">
                    <MapPin className="text-[#F28C28]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Service Area</h4>
                    <p className="text-[#F28C28] font-medium">Blackburn & Surrounding Areas</p>
                    <p className="text-sm text-slate-600">Including Darwen, Accrington, Burnley</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100/60 p-3 rounded-xl">
                    <Clock className="text-[#F28C28]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Working Hours</h4>
                    <p className="text-[#F28C28]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-[#F28C28]">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-sm text-slate-600">Emergency callouts available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#F28C28] fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-slate-600 italic mb-4">
                "Excellent work on our kitchen cabinets. Professional, punctual, and the quality is outstanding. Highly recommend Horizon Carpentry!"
              </blockquote>
              <cite className="text-slate-800 font-semibold">- Sarah M., Blackburn</cite>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Coverage Area</h3>
              <div className="bg-gradient-to-br from-orange-100/60 to-orange-200/60 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-[#F28C28] mx-auto mb-2" size={48} />
                  <p className="text-slate-800 font-medium">Blackburn & Surrounding Areas</p>
                  <p className="text-sm text-slate-600">Interactive map coming soon</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#F28C28] to-[#E3963E] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 text-orange-100">
                Get your free quote today. We respond to all enquiries within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+441234567890" 
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 flex-1 shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  Call to discuss your job
                </a>
                <button 
                  onClick={onBookingClick}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 flex-1 shadow-lg hover:shadow-xl"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}