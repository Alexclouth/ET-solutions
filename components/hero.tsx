"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-linear-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image - Optimized for mobile viewport */}
      <div
        className="absolute inset-0 object-fill opacity-20"
        style={{
          backgroundImage:
            "url(/modern-tech-building-data-center-infrastructure.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center text-center flex-1 py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Smart Electrical & Sanitary Solutions for Modern Buildings
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
            Professional infrastructure services for buildings with cutting-edge technology and expert
            craftsmanship
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-teal-500 text-navy-900 rounded-lg font-bold text-base md:text-lg hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 min-h-12 active:bg-teal-600"
            >
              Contact Us <ArrowRight size={20} className="hidden sm:block" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-teal-500 text-teal-500 rounded-lg font-bold text-base md:text-lg hover:bg-teal-500 hover:text-navy-900 transition-colors min-h-12 active:bg-teal-600 active:text-navy-900"
            >
            <a href="tel:+251913864370">
              0913864370
            </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
