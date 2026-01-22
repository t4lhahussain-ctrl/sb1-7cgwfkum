import React, { useState } from 'react';
import { Send, Upload, X } from 'lucide-react';

interface BookingFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function BookingForm({ isVisible, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    jobType: '',
    description: '',
    photo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll call you within 24 hours to discuss your project.');
    setFormData({ name: '', contact: '', jobType: '', description: '', photo: null });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, photo: file });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Book Your Project</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-orange-100/60 rounded-xl transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-orange-200/60 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all bg-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-semibold text-slate-800 mb-2">
                Phone or Email *
              </label>
              <input
                type="text"
                id="contact"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 border border-orange-200/60 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all bg-white"
                placeholder="Your phone number or email"
              />
            </div>

            <div>
              <label htmlFor="jobType" className="block text-sm font-semibold text-slate-800 mb-2">
                Job Type *
              </label>
              <select
                id="jobType"
                required
                value={formData.jobType}
                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                className="w-full px-4 py-3 border border-orange-200/60 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a service</option>
                <option value="doors">Doors</option>
                <option value="skirting">Skirting</option>
                <option value="cabinets">Cabinets</option>
                <option value="stairs">Stairs</option>
                <option value="windows">Windows</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-800 mb-2">
                Tell me about the problem...
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-orange-200/60 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all resize-none bg-white"
                placeholder="Describe your project in detail..."
              />
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-semibold text-slate-800 mb-2">
                Upload Photo (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="photo"
                  className="w-full px-4 py-3 border-2 border-dashed border-orange-200/60 rounded-xl hover:border-[#F28C28] transition-colors cursor-pointer flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 bg-white"
                >
                  <Upload size={20} />
                  {formData.photo ? formData.photo.name : 'Choose a photo'}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              <Send size={20} />
              Submit & We'll Call You!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}