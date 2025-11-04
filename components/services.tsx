"use client"

import { motion } from "framer-motion"
import { Zap, Lightbulb, Wifi, Wrench, Droplets, Pipette as Pipe, Flame, AlertCircle } from "lucide-react"

const services = [
  {
    category: "Electrical Services",
    items: [
      {
        icon: Zap,
        title: "High-Rise Electrical Installation",
        description: "Professional electrical line installation for modern high-rise buildings",
      },
      {
        icon: Lightbulb,
        title: "Luxury Lighting Fixtures",
        description: "Premium lighting solutions with energy-efficient technology",
      },
      {
        icon: AlertCircle,
        title: "MDB/SDB Boards",
        description: "Main and sub-distribution board installation and maintenance",
      },
      {
        icon: Wifi,
        title: "Networking & Data Systems",
        description: "Advanced data infrastructure and networking solutions",
      },
      {
        icon: Wrench,
        title: "Electrical Maintenance",
        description: "Preventive and corrective maintenance services",
      },
    ],
  },
  {
    category: "Sanitary & Plumbing Services",
    items: [
      {
        icon: Droplets,
        title: "Sanitary Line Installation",
        description: "Complete sanitary line installation with modern materials",
      },
      {
        icon: Pipe,
        title: "Fixture Fitting",
        description: "Professional installation of all plumbing fixtures",
      },
      {
        icon: Zap,
        title: "Pump Systems",
        description: "High-performance pump systems for water distribution",
      },
      {
        icon: Flame,
        title: "Fire Alarm Systems",
        description: "Integrated fire safety and alarm system installation",
      },
      {
        icon: Wrench,
        title: "Plumbing Maintenance",
        description: "Regular maintenance and emergency repair services",
      },
    ],
  },
]

export default function Services() {
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
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical and sanitary solutions tailored for modern high-rise buildings
          </p>
        </motion.div>

        {services.map((serviceGroup, groupIndex) => (
          <div key={groupIndex} className="mb-12 md:mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6 md:mb-8 flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-teal-500 rounded-full" />
              {serviceGroup.category}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {serviceGroup.items.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
                    className="p-5 md:p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-500 transition-all cursor-pointer group active:scale-95 md:active:scale-100"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors"
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    <h4 className="text-base md:text-lg font-bold text-navy-900 mb-2">{service.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
