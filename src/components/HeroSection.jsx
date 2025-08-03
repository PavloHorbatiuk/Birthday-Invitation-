import React from 'react'
import { motion } from 'framer-motion'
import { Cake, Heart, Gift } from 'lucide-react'

const HeroSection = ({ onCelebrate }) => {
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
    hidden: { y: 20, opacity: 0 },
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
      textAlign: 'center',
      padding: '20px',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        className="glass-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '800px', position: 'relative' }}
      >
        {/* Animated birthday cake */}
        <motion.div
          className="bounce-animation"
          style={{ fontSize: '80px', marginBottom: '20px' }}
        >
          🎂
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="rainbow-text"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          1 рочок!
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: '#fff',
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Запрошуємо на день народження нашої принцеси! ✨
        </motion.h2>

        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <motion.div
            className="float-animation"
            style={{ fontSize: '40px' }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🎈
          </motion.div>
          <motion.div
            className="float-animation"
            style={{ fontSize: '40px', animationDelay: '0.5s' }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🎁
          </motion.div>
          <motion.div
            className="float-animation"
            style={{ fontSize: '40px', animationDelay: '1s' }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🧸
          </motion.div>
          <motion.div
            className="float-animation"
            style={{ fontSize: '40px', animationDelay: '1.5s' }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🦄
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.3rem',
            color: '#fff',
            lineHeight: '1.8',
            marginBottom: '40px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Приєднуйтесь до нас, щоб відсвяткувати цей особливий день! 
          <br />
          Буде багато сміху, ігор та солодощів! 🍰
        </motion.p>

        <motion.button
          className="magical-button"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCelebrate}
          style={{
            fontSize: '1.2rem',
            padding: '15px 40px'
          }}
        >
          <Cake style={{ marginRight: '10px', display: 'inline' }} />
          Давайте святкувати! 🎉
        </motion.button>

        {/* Decorative hearts */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '30px'
          }}
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
          💖
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontSize: '25px'
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -15, 15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ⭐
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 