"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Native Modules", "State Management"],
    },
    {
      title: "Tools & Libraries",
      skills: ["Framer Motion", "Redux", "Git", "Vite", "Testing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
