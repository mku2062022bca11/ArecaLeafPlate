import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cartItems = state?.cart || [];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const inputClass =
    "bg-gray-700 text-white px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-purple-500 text-sm transition-shadow hover:shadow focus:shadow-md";

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Required";
    });
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const total = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1) * item.price,
    0
  );

  const sendEmail = async () => {
    const orderId = `#ORD${Math.floor(1000 + Math.random() * 9000)}`;

    const itemsHTML = cartItems
      .map(
        (item) => `
      <p>
        ${item.name} (${item.size || "N/A"}) — Qty: ${item.quantity || 1}, Price: ₹${item.price.toFixed(2)}, Total: ₹${((item.quantity || 1) * item.price).toFixed(2)}
      </p>`
      )
      .join("");

    const templateParams = {
      order_id: orderId,
      time: new Date().toLocaleString(),
      name: `${form.firstName} ${form.lastName}`,
      from_email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      country: form.country,
      pincode: form.pincode,
      total: total.toFixed(2),
      items: itemsHTML,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("✅ Email sent!");
    } catch (error) {
      console.error("❌ Email send failed:", error?.text || error);
      Swal.fire({
        title: "Email Error",
        text: "Could not send the email. Check your template and emailjs setup.",
        icon: "error",
        confirmButtonColor: "#7c3aed",
      });
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length || cartItems.length === 0) {
      setErrors(validationErrors);
      Swal.fire({
        title: cartItems.length === 0 ? "Cart is Empty" : "Incomplete Details",
        text:
          cartItems.length === 0
            ? "Add items before placing an order."
            : "Please fill out all fields.",
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

    await sendEmail();

    Swal.fire({
      title: "Order Placed!",
      text: "Your Cash on Delivery order has been successfully submitted.",
      icon: "success",
      background: "linear-gradient(to bottom right, #1f2937, #111827)",
      color: "#fff",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#7c3aed",
      customClass: {
        popup: "rounded-xl shadow-xl",
        confirmButton:
          "px-6 py-2 font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg",
      },
    }).then(() => {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      });
      navigate("/order-confirmation");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white px-6 py-12"
    >
      <h1 className="text-center text-3xl font-extrabold text-purple-400 mb-2">
        🛍 Eternal Checkout
      </h1>
      <p className="text-center text-sm text-gray-400 mb-10">
        Complete your destiny through divine purchase
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Billing Details */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Billing Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field}>
                <label className="text-sm mb-1 block">
                  {field === "firstName" ? "First Name" : "Last Name"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className={`${inputClass} ${
                    errors[field] ? "border border-red-500" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          {["email", "phone"].map((field) => (
            <div key={field}>
              <label className="text-sm mb-1 block">
                {field === "email" ? "Email" : "Phone"}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className={`${inputClass} ${
                  errors[field] ? "border border-red-500" : ""
                }`}
              />
            </div>
          ))}
          <label className="text-sm mb-1 block">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className={`${inputClass} h-20 resize-none ${
              errors.address ? "border border-red-500" : ""
            }`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["city", "state", "country", "pincode"].map((field) => (
              <div key={field}>
                <label className="text-sm mb-1 block">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className={`${inputClass} ${
                    errors[field] ? "border border-red-500" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Order Summary
          </h2>

          <div className="bg-gray-700 rounded-xl shadow-inner p-5 overflow-x-auto">
            <table className="min-w-full text-white text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left pb-2">Product</th>
                  <th className="text-center pb-2">Qty</th>
                  <th className="text-right pb-2">Price</th>
                  <th className="text-right pb-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-400 text-xs">
                          {item.size || ""}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">{item.quantity || 1}</td>
                    <td className="text-right">₹{item.price.toFixed(2)}</td>
                    <td className="text-right font-semibold">
                      ₹{((item.quantity || 1) * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-4 text-lg font-bold">
              <span className="text-white">Grand Total: ₹{total.toFixed(2)}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, rotate: -0.5 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-transform duration-300"
          >
            Place Order (COD)
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;
