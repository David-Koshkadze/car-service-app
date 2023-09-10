"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      class="h-auto flex flex-col justify-center border-2 border-gray-200 rounded-xl text-center p-4 md:p-5 hover:shadow-md hover:border-blue-600 cursor-pointer transition dark:border-gray-700"
    >
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        Icon
      </div>

      <div class="my-3">
        <h3 class="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>

      <div>{description}</div>
    </motion.div>
  );
}
