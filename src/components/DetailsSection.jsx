import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Gift, Music, Cake } from 'lucide-react'

const DetailsSection = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  const details = [
    {
      icon: Calendar,
      title: 'Дата',
      info: 'Субота, 15 грудня 2024',
      emoji: '📅',
      color: '#ff6b6b'
    },
    {
      icon: Clock,
      title: 'Час',
      info: '14:00 - 18:00',
      emoji: '⏰',
      color: '#feca57'
    },
    {
      icon: MapPin,
      title: 'Місце',
      info: 'Наш затишний дім\nвул. Святкова, 1',
      emoji: '🏠',
      color: '#48dbfb'
    },
    {
      icon: Gift,
      title: 'Подарунки',
      info: 'Ваша присутність - найкращий подарунок!',
      emoji: '🎁',
      color: '#ff9ff3'
    },
    {
      icon: Cake,
      title: 'Частування',
      info: 'Торт, солодощі та дитяче меню',
      emoji: '🍰',
      color: '#54a0ff'
    },
    {
      icon: Music,
      title: 'Розваги',
      info: 'Ігри, анімація та багато сміху!',
      emoji: '🎵',
      color: '#5f27cd'
    }
  ]

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
        style={{ maxWidth: '1200px', width: '100%' }}
      >
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          <motion.div
            className="bounce-animation"
            style={{ fontSize: '70px', marginBottom: '20px' }}
          >
            🎉
          </motion.div>
          
          <motion.h2
            variants={cardVariants}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 3.5rem)',
              color: '#fff',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Деталі свята ✨
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              lineHeight: '1.6'
            }}
          >
            Вся важлива інформація про наше маленьке свято!
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}
        >
          {details.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: `linear-gradient(135deg, ${detail.color}22, rgba(255,255,255,0.1))`,
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${detail.color}44`,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${detail.color}11, transparent)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  style={{
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <motion.div
                    style={{
                      fontSize: '50px',
                      marginBottom: '15px'
                    }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {detail.emoji}
                  </motion.div>

                  <IconComponent 
                    size={30} 
                    color={detail.color}
                    style={{ marginBottom: '15px' }}
                  />

                  <motion.h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#fff',
                      marginBottom: '15px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {detail.title}
                  </motion.h3>

                  <motion.p
                    style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-line',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {detail.info}
                  </motion.p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional party info */}
        <motion.div
          variants={cardVariants}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '30px',
            textAlign: 'center',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            position: 'relative'
          }}
        >
          <motion.div
            style={{ fontSize: '40px', marginBottom: '20px' }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💝
          </motion.div>

          <h3 style={{
            fontSize: '1.5rem',
            color: '#fff',
            marginBottom: '15px',
            fontWeight: '600',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Важливо знати!
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.7',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Буде багато фотосесій, тому одягайтеся яскраво! 📸
            <br />
            Якщо у вас є алергії, повідомте нас заздалегідь 🤗
            <br />
            Паркування доступне поруч із будинком 🚗
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '5%',
            left: '3%',
            fontSize: '30px',
            zIndex: 1
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎪
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            fontSize: '25px',
            zIndex: 1
          }}
          animate={{
            y: [15, -15, 15],
            rotate: [0, -15, 15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎭
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '8%',
            fontSize: '35px',
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 20, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🌈
        </motion.div>
      </motion.div>
    </section>
  )
}

export default DetailsSection 