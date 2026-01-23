import { motion } from 'motion/react';

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  index: number;
}

const ProductCard = ({ image, name, category, price, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            View More
          </motion.button>
        </motion.div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-red-600 font-semibold">{category}</p>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-900 font-semibold">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;