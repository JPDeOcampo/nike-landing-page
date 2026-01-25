import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/GlobalTypes";
import { useGlobal } from "../context/GlobalContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();
  const { scrollToTop } = useGlobal();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
    scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      style={{ willChange: "transform, opacity" }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View More
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-red-600 font-semibold">{product.category}</p>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-900 font-semibold">
          ₱{product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
