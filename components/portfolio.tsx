"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const showcases = [
  {
    id: 1,
    title: "High-Rise Electrical Installation",
    category: "Electrical Engineering",
    image: "/electricians_thumbnail.webp",
    description:
      "Full electrical line installation, MDB/SDB board setup, and luxury lighting system for high-rise buildings.",
  },
  {
    id: 2,
    title: "Apartment Sanitary System",
    category: "Sanitary Works",
    image: "/sanitary.webp",
    description:
      "High-quality sanitary piping, fixture fitting, and pump system installation for luxury residential apartments.",
  },
  {
    id: 3,
    title: "Networking Infrastructure",
    category: "Networking & Data Systems",
    image: "/networking.jpg",
    description:
      "Data cabling and network system installation for large-scale office and commercial buildings.",
  },
  {
    id: 4,
    title: "Fire Alarm & Safety Integration",
    category: "Safety Systems",
    image: "/firealarm.jpg",
    description:
      "Integrated fire alarm and electrical safety systems for commercial and residential towers.",
  },
  {
    id: 5,
    title: "Electrical & Plumbing Upgrade",
    category: "Renovation Project",
    image: "/plumbing.jpg",
    description:
      "Comprehensive maintenance and modernization of electrical and plumbing systems for improved efficiency.",
  },
  {
    id: 6,
    title: "Office Tower Maintenance",
    category: "Maintenance & Repair",
    image: "/electrical-maintenance.jpg",
    description:
      "Preventive electrical maintenance, pump system servicing, and fixture replacement for business towers.",
  },
]

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projects — demonstrating our precision, expertise, and reliability services in
            electrical, sanitary, and building systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {showcases.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 h-64 bg-gray-200">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-500 text-navy-900 p-3 rounded-lg hover:bg-teal-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-teal-500 uppercase tracking-wide">{work.category}</p>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-500 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
