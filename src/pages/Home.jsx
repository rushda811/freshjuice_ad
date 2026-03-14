import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import orange from "../assets/orange.png";
import grape from "../assets/grape.png";
import kiwi from "../assets/kiwi.png";
import raspberry from "../assets/raspberry.png";
import logo from "../assets/logo.png";

export default function Home() {
  const [gradient, setGradient] = useState(
    "radial-gradient(circle at 30% 40%, #FFB86C, #FF6A00, #FF3C00)"
  );

  const juices = [
    {
      name: "Orange Juice",
      tagline: "ZEST",
      description:
        "Cold-pressed Valencia oranges delivering vibrant citrus intensity with a naturally sweet finish.",
      image: orange,
      gradient:
        "radial-gradient(circle at 30% 40%, #FFB86C, #FF6A00, #FF3C00)",
    },
    {
      name: "Grape Juice",
      tagline: "VITAL",
      description:
        "Deep antioxidant grape blend with refined body and rich natural sweetness.",
      image: grape,
      gradient:
        "radial-gradient(circle at 70% 30%, #C69BFF, #6B21A8, #3B0764)",
    },
    {
      name: "Kiwi Juice",
      tagline: "FRESH",
      description:
        "Exotic kiwi infusion bursting with tropical brightness and clean energy.",
      image: kiwi,
      gradient:
        "radial-gradient(circle at 40% 70%, #88E5D0, #047857, #022C22)",
    },
    {
      name: "Raspberry Juice",
      tagline: "BERRY",
      description:
        "Silky raspberry fusion with bold aroma and vibrant crimson elegance.",
      image: raspberry,
      gradient:
        "radial-gradient(circle at 60% 60%, #F099B6, #9D174D, #500724)",
    },
  ];

  return (
<div className="relative h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory font-poppins no-scrollbar">      {/* LIQUID MORPH BACKGROUND */}
      <motion.div
        className="fixed inset-0 -z-20"
        animate={{ background: gradient }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          backgroundSize: "300% 300%",
          animation: "liquidMove 25s ease infinite",
        }}
      />

      {/* Header */}
<header className="fixed top-0 left-0 w-full flex justify-between items-center px-16 py-6 z-20">
  <img src={logo} alt="Logo" className="h-16 object-contain" />

  <nav className="hidden md:flex gap-12 text-sm font-semibold tracking-wider text-white">
    <a href="#" className="hover:opacity-70 transition">
      Home
    </a>
    <a href="#" className="hover:opacity-70 transition">
      Cart
    </a>
    <a href="#" className="hover:opacity-70 transition">
      Track
    </a>
  </nav>
</header>


      {juices.map((juice, index) => (
        <FlavorSection key={index} juice={juice} setGradient={setGradient} />
      ))}

      <style jsx>{`
        @keyframes liquidMove {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

function FlavorSection({ juice, setGradient }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) setGradient(juice.gradient);
  }, [isInView, juice.gradient, setGradient]);

  return (
    <section
      ref={ref}
className="min-h-screen snap-start flex items-center justify-center px-12 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 items-center gap-20 relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold tracking-tight">
            {juice.name}
          </h1>

          <p className="text-lg opacity-85 leading-relaxed max-w-md">
            {juice.description}
          </p>

          <motion.button
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="relative px-14 py-4 rounded-full 
             bg-white/10 
             border border-white/30 
             text-white 
             font-medium 
             tracking-widest 
             uppercase 
             backdrop-blur-md
             transition-all duration-500 ease-out
             hover:bg-white hover:text-black hover:border-white"
>
  Order Now
</motion.button>
        </motion.div>

        {/* CENTER PRODUCT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-[600px] h-[600px] bg-white/20 blur-[140px] rounded-full z-0"></div>

          <motion.img
            src={juice.image}
            alt={juice.name}
            className="relative w-80 md:w-[440px] z-20"
            animate={{
              y: [-20, 20],
              rotate: [-3, 3],
              scale: [1, 1.04],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            style={{
              filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.45))",
            }}
          />
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-right hidden md:block"
        >
          <div>
            <h3 className="font-semibold text-lg">100% Natural</h3>
            <p className="opacity-75 text-sm">
              No additives. No compromises.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Cold Pressed</h3>
            <p className="opacity-75 text-sm">
              Maximum nutrients retained.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="opacity-75 text-sm">
              Delivered sealed & fresh.
            </p>
          </div>
        </motion.div>
      </div>

      {/* OUTLINE TAGLINE */}
<motion.h2
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 0.30, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="absolute text-[160px] md:text-[240px] font-extrabold tracking-[0.18em] uppercase pointer-events-none select-none"
  style={{
    WebkitTextStroke: "2px rgba(255,255,255,1)",
    color: "transparent",
  }}
>
  {juice.tagline}
</motion.h2>
    </section>
  );
}
