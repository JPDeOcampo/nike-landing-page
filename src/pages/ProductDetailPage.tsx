import { motion } from "motion/react";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import { ShoppingCart, Check, ChevronLeft } from "lucide-react";
import type { Product } from "../types/GlobalTypes";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useGlobal();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  // Get product from location state or use placeholder
  const product: Product = location.state?.product || {
    id: parseInt(id || "0"),
    name: "Product Not Found",
    category: "Unknown",
    price: 0,
    image: "",
  };

  const sizes = ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="default-width">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 cursor-pointer"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-red-600 font-semibold mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-gray-900">
                ₱{product.price.toFixed(2)}
              </p>
            </div>

            {/* Product Description */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience ultimate comfort and style with this premium Nike
                product. Designed with cutting-edge technology and superior
                materials, this item delivers exceptional performance for all
                your activities. Whether you're hitting the gym, running
                errands, or just hanging out, you'll look and feel great.
              </p>
            </div>

            {/* Size Selection */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Select Size
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-colors cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Check size={20} className="text-green-600" />
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={20} className="text-green-600" />
                  <span>Breathable and lightweight design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={20} className="text-green-600" />
                  <span>Durable construction for long-lasting wear</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={20} className="text-green-600" />
                  <span>Iconic Nike style and comfort</span>
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {added ? (
                  <>
                    <Check size={20} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-600 text-center">
                Free shipping on orders over ₱5,550.00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
