import { motion } from "framer-motion";

const FlavourSection = ({ flavour, onAdd }) => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundColor: flavour.color }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-7xl font-bold mb-6"
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {flavour.name}
      </motion.h1>

      <p className="text-xl mb-8 max-w-xl">
        {flavour.description}
      </p>

      <button
        onClick={() => onAdd(flavour)}
        className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
      >
        Add to Cart – ₹{flavour.price}
      </button>
    </motion.section>
  );
};

export default FlavourSection;
