import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { arrivals } from "../constant/Constant";

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
      <div className="default-width">
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
                    alt={item.name}
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
                  {item.name}
                </h3>
                <p className="text-gray-900 font-semibold">
                  ₱{item.price.toFixed(2)}
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
