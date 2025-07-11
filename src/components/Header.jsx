import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Sparkles } from 'lucide-react';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
   <header className={`absolute top-0 left-0 right-0 z-50 px-4 pt-4`}>
      {/* Main navigation */}
      <nav className={`container mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border border-purple-500/20' 
          : 'bg-gray-900/60 backdrop-blur-lg border border-white/10'
      } rounded-full px-6 py-4`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              {/* <h1 className="font-bold text-lg text-white leading-tight bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                Manikandan Areca
              </h1>
              <p className="text-xs text-gray-300 hidden sm:block">Leaf Plate Sales Centre</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              Home
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a>
            <a href="#products" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              Products
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a>
            {/* <a href="#gallery" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              Gallery
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a> */}
            <a href="#about" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              About Us
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a>
            {/* <a href="#bulk-orders" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              Bulk Orders
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a> */}
            <a href="#contact" className="relative text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 rounded-full hover:bg-white/10">
              Contact
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-6 transition-all duration-300"></span>
            </a>
            {/* <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Quote
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors rounded-full hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 py-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                Home
              </a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                Products
              </a>
              {/* <a href="#gallery" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                Gallery
              </a> */}
              <a href="#about" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                About Us
              </a>
              {/* <a href="#bulk-orders" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                Bulk Orders
              </a> */}
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10 mx-4">
                Contact
              </a>
              {/* <div className="pt-2 px-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded-full shadow-lg">
                  Get Quote
                </Button>
              </div> */}
              
              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-700/50 space-y-2 text-sm text-gray-400 px-6">
                <div className="flex items-center space-x-2">
                  <>
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>+91 96775 40740</span>
                  </>
                </div>
                <div className="flex items-center space-x-2">
                  <>
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>manikandan540740@gmail.com</span>
                  </>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};