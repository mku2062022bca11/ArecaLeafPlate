import React from 'react';
import { Phone, Mail, MapPin, Leaf, Facebook, Instagram, Twitter , Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of premium quality areca leaf plates, 
              committed to providing sustainable and eco-friendly dining solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Home</a></li>
              <li><a href="#products" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#bulkOrder" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Round Plates</a></li>
              <li><a href="#" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Square Plates</a></li>
              <li><a href="#" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Bowls</a></li>
              <li><a href="#" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Compartment Plates</a></li>
              <li><a href="#" className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors">Cups & Trays</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 cursor-pointer text-sm">+91 96775 40740</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 cursor-pointer text-sm">manikandan540740@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                <span className="text-gray-300  cursor-pointer text-sm">Bharat Petroleum Station
SH-17A, <br /> Dindigul–Palani Road, Ayakudi, Palani,<br /> Tamil Nadu 624613, India
</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Manikandan Areca Leaf Plate Sales Centre. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-purple-400">
                <Leaf className="w-4 h-4" />
                <span className="text-sm">100% Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};