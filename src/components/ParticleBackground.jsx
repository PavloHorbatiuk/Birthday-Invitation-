import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
          emoji: ['🎈', '🎀', '⭐', '💖', '🌟', '🎁', '🧸', '🦄'][Math.floor(Math.random() * 8)]
        })
      }
      setParticles(newParticles)
    }

    createParticles()
    
    const interval = setInterval(createParticles, 30000) // Refresh particles every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            fontSize: particle.size,
            opacity: 0.6
          }}
          initial={{ 
            scale: 0, 
            rotate: 0,
            y: particle.y 
          }}
          animate={{ 
            scale: [0, 1, 1, 0], 
            rotate: 360,
            y: particle.y - 100
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default ParticleBackground 