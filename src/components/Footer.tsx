import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="bg-gradient-to-r from-[#F28C28] to-[#E3963E] p-3 rounded-xl shadow-lg inline-block">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#F28C28] to-[#E3963E] rounded transform rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">HORIZON</h3>
                    <p className="text-xs text-orange-100 leading-tight">CARPENTRY & JOINERY</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional carpentry and joinery services in Blackburn and surrounding areas. Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-200">Quick Contact</h4>
            <div className="space-y-3">
              <a href="tel:+441234567890" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                01234 567 890
              </a>
              <a href="mailto:info@horizoncarpentry.co.uk" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                info@horizoncarpentry.co.uk
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} />
                Blackburn, Lancashire
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-200">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Doors & Frames</li>
              <li>Skirting & Architrave</li>
              <li>Kitchen Cabinets</li>
              <li>Staircases</li>
              <li>Window Frames</li>
              <li>Custom Joinery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Horizon Carpentry & Joinery Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}