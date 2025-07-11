import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Leaf, Recycle, Shield } from 'lucide-react';
import Hill from "./Images/PalaniHill.jpg"

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-900/30 via-transparent to-purple-900/30"></div>
        
        {/* Animated particles/dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
          <div className="absolute top-80 right-10 w-1 h-1 bg-blue-300 rounded-full animate-bounce"></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <img
          src={Hill}
          alt="Natural areca leaf plates"
          className="w-full h-full object-cover "
        />
        {/* opacity-30 mix-blend-soft-light */}
        
        {/* Final overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-6">
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                  <span className="block">Manikandan</span>
                  <span className="block text-green-400">Areca Leaf Plate</span>
                  <span className="block">Sales Centre</span>
                </h1>
                
                <p className="text-white/90 text-center text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  100% Natural • Eco-Friendly • Biodegradable • Disposable
                </p>
              </div>

              {/* Feature highlights */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <Leaf className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">100% Natural</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <Recycle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Eco-Friendly</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Food Safe</span>
                </div>
              </div> */}

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:border-purple-400/50"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Now
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-12 space-y-2">
                <p className="text-white/60 text-sm">Trusted by 500+ customers across Tamil Nadu</p>
                <div className="flex items-center justify-center space-x-4 text-white/80 text-sm">
                  <span>✓ Premium Quality</span>
                  <span>✓ Fast Delivery</span>
                  <span>✓ Bulk Orders</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-green-400 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};