import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleLogin = () => alert("Login clicked!");
  const handleSignUp = () => alert("Sign Up clicked!");
  const handleGoogleSignIn = () => alert("Google Sign-In clicked!");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-6">
      
      {/* Hero Text Section */}
      <div ref={heroRef} className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Welcome to Our Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/90 mb-6"
        >
          Learn, Practice, and Grow with us.
        </motion.p>

        {/* Login Buttons */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <button
            onClick={handleLogin}
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition"
          >
            Login
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
          >
            Sign in with Google
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-4"
        >
          <p className="text-white/90">
            Don't have an account?{" "}
            <span
              onClick={handleSignUp}
              className="text-yellow-300 font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
