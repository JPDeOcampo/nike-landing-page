import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  description?: string;
  isCentered?: boolean;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
};

const maxWidthMap = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  full: "max-w-full",
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SectionHeader = ({
  title,
  description,
  isCentered = true,
  className = "",
  maxWidth = "md",
}: SectionHeaderProps) => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      className={`
        mb-12
        ${isCentered ? "text-center mx-auto" : "text-left"}
        ${maxWidthMap[maxWidth]}
        ${className}
      `}
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
