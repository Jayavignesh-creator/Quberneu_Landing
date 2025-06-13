import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Quberneu transformed our digital presence completely. The team's attention to detail and innovative approach exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "Outstanding work on our platform redesign. The performance improvements and user experience enhancements were remarkable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, FutureApp",
      content: "The team delivered exactly what we needed, on time and on budget. Their expertise in modern web technologies is impressive.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            ⭐
          </motion.span>
        ))}
      </div>
    )
  }

  return (
    <div id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-gray-400">"</div>
        <div className="absolute bottom-20 right-10 text-6xl text-gray-400 rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="mb-6">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <motion.p
                className="text-gray-700 text-lg leading-relaxed mb-8 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: false }}
              >
                "{testimonial.content}"
              </motion.p>
              
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: false }}
              >
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials