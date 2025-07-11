import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Package, Users, Truck, Calculator, CheckCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export const BulkOrders = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    eventDate: '',
    requirements: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every((val) => val.trim() !== '');
    if (!allFieldsFilled) {
      Swal.fire({
        title: 'Incomplete Details',
        text: 'Please fill out all fields.',
        icon: 'warning',
        background: 'linear-gradient(to bottom right, #1f2937, #111827)',
        color: '#fff',
        confirmButtonText: 'OK',
        confirmButtonColor: '#7c3aed',
        customClass: {
          popup: 'rounded-xl shadow-xl',
          confirmButton:
            'px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg',
        },
      });
      return;
    }

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_BULK_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: 'Request Submitted! ✅',
        text: 'We will get back to you within 24 hours.',
        icon: 'success',
        background: 'linear-gradient(to bottom right, #1f2937, #111827)',
        color: '#fff',
        confirmButtonText: 'OK',
        confirmButtonColor: '#7c3aed',
        customClass: {
          popup: 'rounded-xl shadow-xl',
          confirmButton:
            'px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg',
        },
      });

      setFormData({
        companyName: '',
        name: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        eventDate: '',
        requirements: '',
      });
    } catch (error) {
      console.error('❌ Failed to send bulk request:', error);
      Swal.fire({
        title: 'Error Sending Request',
        text: 'Please try again later or check your email setup.',
        icon: 'error',
        background: 'linear-gradient(to bottom right, #1f2937, #111827)',
        color: '#fff',
        confirmButtonText: 'OK',
        confirmButtonColor: '#7c3aed',
        customClass: {
          popup: 'rounded-xl shadow-xl',
          confirmButton:
            'px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg',
        },
      });
    }
  };

  const bulkPackages = [
    {
      title: 'Small Events',
      quantity: '100-500 pieces',
      discount: '10% OFF',
      features: [
        'Mixed product types',
        'Standard packaging',
        '3-5 days delivery',
        'Affordable bulk options',
      ],
      price: 'Starting from ₹250',
    },
    {
      title: 'Medium Events',
      quantity: '500-2000 pieces',
      discount: '15% OFF',
      features: [
        'Custom product mix',
        'Branded packaging',
        '2-3 days delivery',
        'Dedicated support',
      ],
      price: 'Starting from ₹1,200',
    },
    {
      title: 'Large Events',
      quantity: '2000+ pieces',
      discount: '20% OFF',
      features: [
        'Full customization',
        'Premium packaging',
        'Next day delivery',
        'Volume pricing',
      ],
      price: 'Custom pricing',
    },
  ];

  return (
    <section id="bulkOrder" className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative">
      {/* Decorative Dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bulk Orders & Corporate Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Perfect for restaurants, caterers, event organizers, and corporate functions.
            Get special pricing and dedicated support for your bulk requirements.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bulkPackages.map((pkg, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-700 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Package className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">{pkg.title}</CardTitle>
                <p className="text-purple-400 font-semibold">{pkg.quantity}</p>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-1 border border-green-500/30">
                  <span className="text-green-400 font-bold">{pkg.discount}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">{pkg.price}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bulk Form */}
        {/* <Card id="bulk-form" className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Request Bulk Quote</CardTitle>
            <p className="text-gray-300 text-center">Fill out the form below and we'll get back to you within 24 hours</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              {/* {[
                ['companyName', 'Company/Organization Name *'],
                ['name', 'Contact Person *'],
                ['email', 'Email Address *'],
                ['phone', 'Phone Number *'],
              ].map(([name, label]) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-1">
                    {label}
                  </label>
                  <input
                    type={name === 'email' ? 'email' : 'text'}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Product Type *</label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select product type</option>
                  <option value="round-plates">Round Plates</option>
                  <option value="square-plates">Square Plates</option>
                  <option value="bowls">Bowls</option>
                  <option value="compartment-plates">Compartment Plates</option>
                  <option value="cups">Cups</option>
                  <option value="trays">Trays</option>
                  <option value="mixed">Mixed Products</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Estimated Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-1">Required Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-1">Additional Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Tell us about any specific requirements, custom sizes, branding needs, etc."
                />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Package className="w-4 h-4" />
                  <span>Request Bulk Quote</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>  */}
        */
      </div>
    </section>
  );
};
export default BulkOrders;