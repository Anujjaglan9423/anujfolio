"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "CET TEST - Exam Preparation Platform",
    description:
      "India's #1 free mock test platform for competitive exams. Features include unlimited mock tests, detailed analytics, all-India rankings, Uttarakhand GK, and support for UKSSSC, UKPSC, and other state exams. Built for scalability and performance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    link: "https://cettest.site/",
    github: "#",
    type: "web",
    image: "/cettest-logo.jpeg",
  },
  {
    title: "Kipinn Business App",
    description:
      "A comprehensive property management mobile application for real estate businesses. Features include property listing, tenant management, rent collection, maintenance tracking, and financial reporting.",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "Redux", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.kipinn.business",
    github: "#",
    type: "mobile",
    image: "/kipinn_logo.png",
  },
  {
    title: "Kipinn Business Web",
    description:
      "Web version of the Kipinn property management system. Provides a comprehensive dashboard for property managers with analytics, tenant management, and financial tracking capabilities.",
    tags: ["React", "Redux", "Tailwind CSS", "TypeScript", "REST API"],
    link: "https://webapp.kipinn.com/",
    github: "#",
    type: "web",
    image: "/kipinn_logo.png",
  },
  {
    title: "Panuka App",
    description:
      "Mobile application for Panuka Enterprise, offering business management solutions. Includes inventory management, sales tracking, and customer relationship management features.",
    tags: ["React Native", "JavaScript", "Tailwind CSS", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.panukaapp&hl=en_IN",
    github: "#",
    type: "mobile",
    image: "/panuka.webp",
  },
  {
    title: "Panuka Enterprise Web",
    description:
      "Web platform for Panuka Enterprise providing comprehensive business management tools. Features include inventory control, sales analytics, and multi-user access management.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Context API"],
    link: "https://panukaenterprise.com/",
    github: "#",
    type: "web",
    image: "/panuka.webp",
  },
  {
    title: "Somalia Port Clearance Automation",
    description:
      "Digital transformation solution for port container clearance processes. Automates documentation, tracking, and approval workflows for efficient port operations and container management.",
    tags: ["React", "Tailwind CSS", "JavaScript", "REST API", "Formik"],
    // link: "#",
    github: "#",
    type: "web",
    image: "/port.jpg",
  },
  {
    title: "Procurement & Supply Chain Management",
    description:
      "End-to-end crop management system tracking from farm cultivation to market distribution. Manages crop growth, harvesting, warehouse storage, and supply chain logistics with comprehensive reporting.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Chart.js", "CMS"],
    // link: "#",
    github: "#",
    type: "web",
    image: "/crop.jpg",
  },
  {
    title: "Gini Mini Creation",
    description:
      "E-commerce platform for a clothing manufacturing textile factory. Features product catalog, custom order management, inventory tracking, and client relationship management.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    link: "https://gini-mini-creation.vercel.app/",
    github: "#",
    type: "web",
    image: "/ginilogo.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, dark mode, and optimized performance with best practices.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    // link: "#",
    github: "#",
    type: "web",
    image: "/anuj.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Here are some of the projects I've worked on, showcasing my
            expertise in React, React Native, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${project.type === "mobile"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                  >
                    {project.type === "mobile" ? "Mobile" : "Web"}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Anujjaglan9423"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
