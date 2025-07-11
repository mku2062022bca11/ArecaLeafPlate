import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Random ID generator
// const generateOrderID = () => {
//   const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
//   let id = '';
//   for (let i = 0; i < 6; i++) {
//     id += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return `#${id}`;
// };

const OrderConfirmation = () => {
  const navigate = useNavigate();
  // const orderID = generateOrderID();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white px-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl p-8 sm:p-10 text-center shadow-2xl max-w-lg w-full"
      >
        <CheckCircle className="text-green-400 w-12 h-12 mx-auto mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold text-purple-400 mb-2">Order Placed Successfully</h1>
        <p className="text-sm text-gray-300 mb-4">
          Thank you for your purchase. We’re preparing it for dispatch!
        </p>
        {/* <p className="text-lg font-semibold">
          Order ID: <span className="text-blue-400">{orderID}</span>
        </p> */}
        <p className="text-sm text-gray-400 mt-2">You’ll receive updates shortly.</p>

        <div className="mt-6 space-y-3">
          <button
            onClick={() => navigate('/products')}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all"
          >
            Browse More Products
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderConfirmation;