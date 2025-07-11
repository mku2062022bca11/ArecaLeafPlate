import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Eye, Plus, Minus, X } from "lucide-react";
import { Link } from "react-router-dom";
import Img1 from "./Images/Img1.jpg";
import Img2 from "./Images/squareplates.png";
import Img3 from "./Images/bowl.webp";

const products = [
  {
    id: 1,
    name: "Round Plates",
    sizes: [
      { size: "6 inch", price: 2.5, stock: "2000 plates" },
      { size: "8 inch", price: 3.5, stock: "2000 plates" },
      { size: "10 inch", price: 4.5, stock: "10000 plates" },
      { size: "12 inch", price: 5.5, stock: "5000 plates" },
    ],
    image: Img1,
    description:
      "Perfect for serving main courses and traditional meals. Made from naturally fallen areca palm leaves.",
    features: [
      "100% Natural",
      "Biodegradable",
      "Microwave Safe",
      "Oil Resistant",
    ],
  },
  {
    id: 2,
    name: "Square Plates",
    sizes: [
      { size: "6 inch", price: 2.8, stock:"2000 plates" },
      { size: "8 inch", price: 3.8, stock: "2000 plates" },
      { size: "10 inch", price: 4.8, stock: "2000 plates" },
    ],
    image: Img2,
    description:
      "Modern square design Sustainably shaped for contemporary dining—minimalist, biodegradable, and beautifully bold",
    features: [
      "Elegant Design",
      "Sturdy Build",
      "Heat Resistant",
      "Eco-Friendly",
    ],
  },
  {
    id: 3,
    name: "Bowls",
    sizes: [
      { size: "Small", price: 2.0, stock: "1000 plates" },
      { size: "Medium", price: 2.5, stock: "1000 plates" },
      { size: "Large", price: 3.0, stock: "1000 plates" },
    ],
    image: Img3,
    description:
      "Ideal for curries, rice, and liquid foods Crafted with natural depth and firm edges to handle hearty servings without leaks.",
    features: ["Deep Design", "Leak Proof", "Natural Finish", "Compostable"],
  },
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, selectedSize, quantity = 1) => {
    const cartItem = {
      id: `${product.id}-${selectedSize.size}`,
      productId: product.id,
      name: product.name,
      size: selectedSize.size,
      price: selectedSize.price,
      quantity,
      image: product.image,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, cartItem];
    });
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our complete collection of eco-friendly areca leaf
            products, perfect for all your dining and serving needs.
          </p>
        </div>

        {/* Cart Button */}
        <div className="fixed top-24 right-4 z-50">
          <Button
            onClick={() => setIsCartOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-3 shadow-lg relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-gray-900/50 border border-gray-700 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 space-x-2">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none rounded-full p-2"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {product.name}
                </CardTitle>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    Available Sizes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.slice(0, 3).map((sizeInfo, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-green-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium"
                      >
                        {sizeInfo.size} - ₹{sizeInfo.price}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                  <Button
                    onClick={() => setSelectedProduct(null)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <p className="text-gray-300 mb-4">
                  {selectedProduct.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">
                    Select Size & Add to Cart:
                  </h4>
                  {selectedProduct.sizes.map((sizeInfo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                    >
                      <div>
                        <span className="text-white font-medium">
                          {sizeInfo.size}
                        </span>
                        <span className="text-gray-400 ml-2">
                          ₹{sizeInfo.price}
                        </span>
                        <span className="text-green-400 ml-2 text-sm">
                          ({sizeInfo.stock} in stock)
                        </span>
                      </div>
                      <Button
                        onClick={() => {
                          addToCart(selectedProduct, sizeInfo);
                          setSelectedProduct(null);
                        }}
                        disabled={sizeInfo.stock === 0}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Shopping Cart
                  </h3>
                  <Button
                    onClick={() => setIsCartOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-medium">
                              {item.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{item.size}</p>
                            <p className="text-purple-400">₹{item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 p-0 bg-gray-700 hover:bg-gray-600"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>

                            <input
                              type="text"
                              min={1}
                              value={item.quantity}
                              onChange={(e) =>
                                updateCartQuantity(
                                  item.id,
                                  Number(e.target.value)
                                )
                              }
                              className="w-12 text-center bg-gray-900 text-white font-semibold rounded-md
                     outline-none px-2 py-1 text-sm transition duration-200
                     focus:ring-2 focus:ring-purple-500 hover:ring hover:ring-blue-400"
                            />

                            <Button
                              size="sm"
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 p-0 bg-gray-700 hover:bg-gray-600"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-white">
                          Total: ₹{getTotalPrice()}
                        </span>
                      </div>
                      <Link to="/checkout" state={{ cart }}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                          Proceed to Checkout
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Need custom sizes or bulk quantities? We've got you covered!
          </p>
          <a href="#bulkOrder">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Request Custom Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
