import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

function CodingJourney() {
  const journey = [
    {
      icon: <FaCode />,
      title: "LeetCode Practice",
      description:
        "Practicing Data Structures and Algorithms through coding challenges focused on arrays, strings, linked lists, trees, and dynamic programming.",
    },
    {
      icon: <FaLaptopCode />,
      title: "HackerRank",
      description:
        "Solved Python and SQL challenges to strengthen programming fundamentals, database concepts, and logical thinking.",
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description:
        "Continuously improving debugging, algorithmic thinking, and software development skills through consistent practice and interview preparation.",
    },
  ];

  return (
    <section
      id="coding"
      className="py-24 px-6 bg-slate-900/20 text-white"
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
            Coding Journey
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            My continuous journey of improving problem-solving,
            algorithmic thinking, and software development skills.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            "9.0 CGPA",
            "Python",
            "AI/ML Projects",
            "DSA Learning",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-900/50
                border
                border-white/10
                rounded-2xl
                p-4
                text-center
                font-semibold
                hover:border-cyan-400/40
                transition
              "
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Journey Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
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
              <div className="text-cyan-400 text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CodingJourney;