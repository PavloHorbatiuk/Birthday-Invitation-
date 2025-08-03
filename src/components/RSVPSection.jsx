import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Heart, Users, Phone, Mail } from 'lucide-react'

const RSVPSection = ({ onRSVP }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '1',
    attending: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      onRSVP()
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        className="glass-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ maxWidth: '800px', width: '100%' }}
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                style={{
                  textAlign: 'center',
                  marginBottom: '40px'
                }}
              >
                <motion.div
                  className="sparkle"
                  style={{ fontSize: '60px', marginBottom: '20px' }}
                >
                  💌
                </motion.div>
                
                <motion.h2
                  variants={itemVariants}
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    color: '#fff',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  Підтвердіть участь! 💕
                </motion.h2>
                
                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    lineHeight: '1.6'
                  }}
                >
                  Ми будемо дуже раді бачити вас на нашому святі!
                </motion.p>
              </motion.div>

              <motion.form
                variants={containerVariants}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <motion.div variants={itemVariants}>
                  <label style={{
                    display: 'block',
                    color: '#fff',
                    marginBottom: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    👤 Ваше ім'я *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '15px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ff6b6b'
                      e.target.style.transform = 'scale(1.02)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                      e.target.style.transform = 'scale(1)'
                    }}
                    placeholder="Введіть ваше ім'я"
                  />
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}
                >
                  <div>
                    <label style={{
                      display: 'block',
                      color: '#fff',
                      marginBottom: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      📱 Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '15px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '1rem',
                        backdropFilter: 'blur(10px)',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#feca57'
                        e.target.style.transform = 'scale(1.02)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                        e.target.style.transform = 'scale(1)'
                      }}
                      placeholder="+380..."
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: '#fff',
                      marginBottom: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      👥 Кількість гостей
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '15px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '1rem',
                        backdropFilter: 'blur(10px)',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num} style={{ background: '#333', color: '#fff' }}>
                          {num} {num === 1 ? 'особа' : num < 5 ? 'особи' : 'осіб'}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label style={{
                    display: 'block',
                    color: '#fff',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    🎉 Чи будете присутні?
                  </label>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    {[
                      { value: 'yes', label: 'Так, будемо! 🎈', color: '#00d2d3' },
                      { value: 'no', label: 'На жаль, ні 😢', color: '#ff6b6b' }
                    ].map(option => (
                      <motion.label
                        key={option.value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '15px 25px',
                          borderRadius: '25px',
                          border: `2px solid ${formData.attending === option.value ? option.color : 'rgba(255,255,255,0.3)'}`,
                          background: formData.attending === option.value 
                            ? `${option.color}22` 
                            : 'rgba(255,255,255,0.1)',
                          color: '#fff',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <input
                          type="radio"
                          name="attending"
                          value={option.value}
                          checked={formData.attending === option.value}
                          onChange={handleInputChange}
                          style={{ display: 'none' }}
                          required
                        />
                        {option.label}
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label style={{
                    display: 'block',
                    color: '#fff',
                    marginBottom: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    💭 Побажання або коментарі
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '15px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '100px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#48dbfb'
                      e.target.style.transform = 'scale(1.02)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                      e.target.style.transform = 'scale(1)'
                    }}
                    placeholder="Поділіться своїми побажаннями..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  variants={itemVariants}
                  className="magical-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '18px 40px',
                    fontSize: '1.2rem',
                    marginTop: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⏳
                        </motion.div>
                        Відправляємо...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                      >
                        <Send size={20} />
                        Підтвердити участь! 💕
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ textAlign: 'center', padding: '40px' }}
            >
              <motion.div
                style={{ fontSize: '100px', marginBottom: '30px' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎉
              </motion.div>

              <motion.h2
                style={{
                  fontSize: '2.5rem',
                  color: '#fff',
                  marginBottom: '20px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Дякуємо! 💖
              </motion.h2>

              <motion.p
                style={{
                  fontSize: '1.3rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Ваше підтвердження отримано!
                <br />
                Чекаємо на вас на святі! 🎂✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10px',
            right: '20px',
            fontSize: '25px',
            zIndex: 1
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💕
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '15px',
            fontSize: '30px',
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🌸
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RSVPSection 