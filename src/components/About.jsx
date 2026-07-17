import { motion } from "framer-motion";
import { FaGraduationCap, FaBullseye, FaCode } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      items: [
        "BE - Computer Science Engineering",
        "CGPA: 9.0",
        "2022 - 2026",
      ],
    },
    {
      icon: <FaBullseye />,
      title: "Focus Areas",
      items: [
        "Software Development",
        "AI / ML",
        "Data Analytics",
        "Quantitative Finance",
      ],
    },
    {
      icon: <FaCode />,
      title: "Current Goal",
      items: [
        "Python Developer",
        "Problem Solver",
        "Continuous Learner",
        "Building Real Projects",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Computer Science Engineering graduate with strong foundations
            in Python, software development, databases, and AI/ML.
            Passionate about building practical applications and solving
            real-world problems through technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-900/50
                backdrop-blur-md
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 text-3xl mb-4">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <ul className="space-y-2 text-slate-300">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;