import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900/20 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm open to Software Development, Python Developer,
            AI/ML, Data Analytics, and Graduate opportunities.
            Feel free to reach out or connect with me.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-slate-900/50
            backdrop-blur-md
            border
            border-white/10
            rounded-3xl
            p-10
            text-center
            hover:border-cyan-400/40
            transition-all
            duration-300
          "
        >

          {/* Contact Icons */}
          <div className="flex justify-center flex-wrap gap-6 mb-10">

            {/* GitHub */}
            <a
              href="https://github.com/Rohan2731"
              target="_blank"
              rel="noreferrer"
              className="
                w-16
                h-16
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-cyan-500
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
              className="
                w-16
                h-16
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-cyan-500
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:rohanbilagi27@gmail.com"
              className="
                w-16
                h-16
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-cyan-500
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Email Text */}
          <p className="text-slate-300 mb-8 text-lg">
            rohanbilagi27@gmail.com
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-semibold
              transition-all
              duration-300
            "
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;