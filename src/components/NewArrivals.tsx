import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const arrivals = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1761942028138-794f1d151e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYXRobGV0aWMlMjB3ZWFyfGVufDF8fHx8MTc2OTE0MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nike Dri-FIT Pro",
    category: "Training Apparel",
    price: 89.99,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1656950246075-68a65e9c3ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc3BvcnRzd2VhcnxlbnwxfHx8fDE3NjkxNDE5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nike Sportswear",
    category: "Lifestyle",
    price: 79.99,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1706029831332-67734fbf73d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMG5pa2V8ZW58MXx8fHwxNzY5MTQxOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nike Pro Tights",
    category: "Training",
    price: 64.99,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwcnVubmluZyUyMHNob2VzfGVufDF8fHx8MTc2OTEzNzI4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nike Pegasus 40",
    category: "Running",
    price: 139.99,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1635770997862-2b93a75f4856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYmFza2V0YmFsbCUyMHNob2VzfGVufDF8fHx8MTc2OTA2NDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nike LeBron 21",
    category: "Basketball",
    price: 179.99,
  },
];

const NewArrivals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigationClass =
    "p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer";
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-0">
          <SectionHeader
            title="New Arrivals"
            description="Check out our latest drops"
            isCentered={false}
          />

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className={navigationClass}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className={navigationClass}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth pt-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {arrivals.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="shrink-0 w-80 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white aspect-square mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1 px-2">
                <p className="text-sm text-red-600 font-semibold">
                  {item.category}
                </p>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;
