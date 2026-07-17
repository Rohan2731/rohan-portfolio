import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C++"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Flask", "FastAPI"],
    },
    {
      title: "Database",
      skills: ["Oracle SQL", "PostgreSQL"],
    },
    {
      title: "AI / ML",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Linux", "VS Code", "Google Colab"],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build applications,
            solve problems, and create impactful projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
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
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      border
                      border-slate-700
                      hover:border-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;