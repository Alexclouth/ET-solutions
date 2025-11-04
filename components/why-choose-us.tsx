"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Clock, Award } from "lucide-react"

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Team of licensed and certified experts with extensive industry experience",
    },
    {
      icon: Zap,
      title: "Modern Tools & Technology",
      description: "State-of-the-art equipment and latest technology for optimal results",
    },
    {
      icon: Clock,
      title: "Reliable Maintenance Support",
      description: "24/7 support and preventive maintenance programs for your peace of mind",
    },
    {
      icon: Shield,
      title: "Quality & Safety First",
      description: "Stringent quality checks and safety protocols on every project",
    },
  ]

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
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Why Choose ET Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out through our commitment to excellence, safety, and customer satisfaction
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-500 transition-all text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 transition-colors"
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
