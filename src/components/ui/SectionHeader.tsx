import { motion } from "motion/react";

const SectionHeader = ({
  title,
  description,
  isCentered = true,
}: {
  title: string;
  description: string;
  isCentered?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p
        className={`text-lg text-gray-600 w-full ${isCentered ? "text-center" : "text-left"}`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
