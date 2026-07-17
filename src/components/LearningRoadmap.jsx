import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaChartLine,
  FaBrain,
  FaServer,
  FaCode,
} from "react-icons/fa";

function LearningRoadmap() {
  const learningItems = [
    {
      icon: <FaCode />,
      title: "Advanced DSA",
      description:
        "Improving problem-solving skills through Data Structures and Algorithms.",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description:
        "Exploring ML concepts, model building, evaluation, and deployment.",
    },
    {
      icon: <FaChartLine />,
      title: "Quantitative Finance",
      description:
        "Learning financial mathematics, trading systems, and market analysis.",
    },
    {
      icon: <FaServer />,
      title: "FastAPI & Backend",
      description:
        "Building scalable backend services and REST APIs.",
    },
  ];

  return (
    <section
      id="learning"
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
            Currently Learning
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and concepts I am actively exploring to
            strengthen my technical foundation and grow as a developer.
          </p>
        </motion.div>

        {/* Learning Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-900/50
                backdrop-blur-md
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-cyan-400">
                <FaCheckCircle />
                <span className="text-sm">In Progress</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LearningRoadmap;