import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the hero container
    gsap.from(heroRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      
      {/* Hero Text Section */}
      <div ref={heroRef} className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Welcome to Our Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-700 mb-6"
        >
          Learn, Practice, and Grow with us.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
       
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img
          src="https://source.unsplash.com/600x400/?education,technology"
          alt="Hero"
          className="rounded-2xl shadow-xl mx-auto md:mx-0"
        />
      </motion.div>
    </div>
  );
}

export default Home;
