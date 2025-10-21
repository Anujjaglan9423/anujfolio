"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Anuj
          </motion.div>
          <p className="text-foreground/60 text-sm">© {currentYear} Anuj. All rights reserved.</p>
          <p className="text-foreground/60 text-sm">
            Crafted with <span className="text-accent">❤️</span> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
