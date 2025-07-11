import React from 'react';
import { Card, CardContent } from './ui/card';
import { Leaf, Recycle, Shield, Truck, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made from fallen areca palm leaves without any chemicals or additives"
  },
  {
    icon: Recycle,
    title: "Biodegradable",
    description: "Completely compostable within 60 days, leaving no harmful residue"
  },
  {
    icon: Shield,
    title: "Food Safe",
    description: "No toxic coatings or chemicals, safe for hot and cold foods"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Tamil Nadu with reliable logistics partners"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous quality control ensures consistent, durable products"
  },
  {
    icon: Users,
    title: "Bulk Orders",
    description: "Special pricing for restaurants, caterers, and event organizers"
  }
];

export const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our Areca Leaf Plates?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience the perfect blend of sustainability, quality, and convenience 
            with our premium areca leaf products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-green-500/30 transition-all duration-300 border border-purple-500/30">
                    <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-300">Plates Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-300">Eco-Friendly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};