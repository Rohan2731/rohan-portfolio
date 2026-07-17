import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="Rohan Bilagi"
              className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl relative"
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Rohan Bilagi
          </h1>

          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Python Developer",
              2000,
              "AI/ML Enthusiast",
              2000,
              "Aspiring Quant Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-cyan-400 font-semibold"
          />

          <p className="mt-6 text-slate-400 leading-relaxed max-w-xl">
            Computer Science graduate passionate about software development,
            AI/ML, data analytics, and quantitative finance. I enjoy building
            real-world applications that solve meaningful problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex items-center gap-2 transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="https://github.com/Rohan2731"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 flex items-center gap-2 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-bilagi-349b2025a/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 flex items-center gap-2 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;