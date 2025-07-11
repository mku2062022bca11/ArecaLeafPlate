import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Users, Leaf, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-80 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Manikandan Areca
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are a leading manufacturer and supplier of premium quality areca leaf plates 
                based in Tamil Nadu, India. With years of experience in the eco-friendly packaging 
                industry, we are committed to providing sustainable alternatives to plastic and 
                paper products.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">100% Natural Process</h3>
                  <p className="text-gray-300">Made from naturally fallen areca palm leaves without any chemicals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Quality Assurance</h3>
                  <p className="text-gray-300">Rigorous quality control at every step of manufacturing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Sustainable Impact</h3>
                  <p className="text-gray-300">Contributing to environmental conservation and rural employment</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact">
                <Button size="lg"  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Us
              </Button>
              </a>
            </div>
          </div>

          {/* Right side - Image and stats */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7656745/pexels-photo-7656745.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Areca leaf plate manufacturing process"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4 bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Leaf className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-300">Eco-Friendly</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};