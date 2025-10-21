"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm a passionate frontend developer with a love for creating
              beautiful, functional, and user-centric web applications. With
              expertise in modern JavaScript frameworks and a keen eye for
              design, I transform ideas into engaging digital experiences.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in web development has equipped me with strong
              problem-solving skills and a deep understanding of responsive
              design principles. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70">Client Satisfaction</p>
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">7+</div>
              <p className="text-foreground/70">Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
