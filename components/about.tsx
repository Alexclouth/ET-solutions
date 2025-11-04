"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  const features = [
    "Professional & Certified Team",
    "Safety-First Approach",
    "Modern Technology",
    "On-Time Delivery",
    "Quality Assurance",
    "Customer Support",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">About ET Solutions</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ET Solutions is a leading provider of electrical and sanitary infrastructure services for high-rise
              buildings. With years of industry experience, we combine professional expertise with cutting-edge
              technology to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to safety, quality, and customer satisfaction sets us apart. We work with the latest tools
              and techniques to ensure every project meets the highest standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-teal-500 shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src="/es.webp" alt="ET Solutions Team" className="w-full h-auto" />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/80 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-xl shadow-lg max-w-xs"
            >
              <p className="font-bold text-lg">500+</p>
              <p className="text-sm">Successful Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
