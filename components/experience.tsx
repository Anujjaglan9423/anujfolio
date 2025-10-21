"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "Senior Frontend Developer",
    company: "Think Straight IT LLP",
    description: "Leading frontend development for enterprise applications",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Think Straight IT LLP",
    description: "Built responsive web applications using React and TypeScript",
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "Think Straight IT LLP",
    description: "Started career developing modern web interfaces",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-accent">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-24"
              >
                {/* Timeline Badge */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-foreground font-bold text-sm border-4 border-background"
                >
                  {index + 1}
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  className="bg-card rounded-lg p-6 border border-border transition-all"
                >
                  <div className="text-sm text-accent font-semibold mb-2">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium mb-3">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
