import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please fill out all required fields.",
        icon: "warning",
        background: "linear-gradient(to bottom right, #1f2937, #111827)",
        color: "#fff",
        confirmButtonText: "OK",
        confirmButtonColor: "#7c3aed",
        customClass: {
          popup: "rounded-xl shadow-xl",
          confirmButton:
            "px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg",
        },
      });
      return;
    }

    const templateParams = {
      ...formData,
      formType: "contact",
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_BULK_TEMPLATE_ID, // shared template
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: "Message Sent! ✅",
        text: "Thank you for contacting us. We'll respond shortly.",
        icon: "success",
        background: "linear-gradient(to bottom right, #1f2937, #111827)",
        color: "#fff",
        confirmButtonText: "OK",
        confirmButtonColor: "#7c3aed",
        customClass: {
          popup: "rounded-xl shadow-xl",
          confirmButton:
            "px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg",
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Failed to send message:", error);
      Swal.fire({
        title: "Error Sending Message",
        text: "Please try again later or check your internet connection.",
        icon: "error",
        background: "linear-gradient(to bottom right, #1f2937, #111827)",
        color: "#fff",
        confirmButtonText: "OK",
        confirmButtonColor: "#7c3aed",
        customClass: {
          popup: "rounded-xl shadow-xl",
          confirmButton:
            "px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg",
        },
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative"
    >
      {/* Background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to make the switch to eco-friendly dining? Contact us for
            quotes, bulk orders, or any questions about our areca leaf products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border border-gray-700 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem icon={Phone} title="Phone" value="+91 96775 40740" />
                <InfoItem icon={Mail} title="Email" value="manikandan540740@gmail.com" />
                <InfoItem
                  icon={MapPin}
                  title="Address"
                  value={
                    <>
                      Bharat Petroleum Station<br />
                      SH-17A, Dindigul–Palani Road, Ayakudi,<br />
                      Palani, Tamil Nadu 624613, India
                    </>
                  }
                />
                <InfoItem
                  icon={Clock}
                  title="Business Hours"
                  value="Mon - Sat: 9:00 AM - 6:00 PM"
                />
              </CardContent>
            </Card>

            <Card className="border border-gray-700 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-700">
                  <iframe
                    title="Ayakudi Palani Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.515%2C10.455%2C77.519%2C10.459&layer=mapnik&marker=10.457%2C77.517"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border border-gray-700 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  id="name"
                  label="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  id="email"
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextAreaField
                  id="message"
                  label="Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Reusable Info Component
const InfoItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-start space-x-3">
    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
      <Icon className="w-5 h-5 text-purple-400" />
    </div>
    <div>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-gray-300 text-sm">{value}</p>
    </div>
  </div>
);

// Reusable Input Field
const InputField = ({ id, label, type = "text", value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
      placeholder={`Enter your ${id}`}
    />
  </div>
);

// Reusable Textarea Field
const TextAreaField = ({ id, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300"
      placeholder="Tell us about your requirements..."
    />
  </div>
);
export default Contact;