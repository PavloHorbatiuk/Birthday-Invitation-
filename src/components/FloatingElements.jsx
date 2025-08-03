import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const createFloatingElements = () => {
      const newElements = []
      
      // Create balloons
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: `balloon-${i}`,
          type: 'balloon',
          emoji: ['🎈', '🎀', '🌟', '💝'][Math.floor(Math.random() * 4)],
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + Math.random() * 200,
          size: Math.random() * 20 + 25,
          duration: Math.random() * 15 + 20,
          delay: Math.random() * 10
        })
      }

      // Create floating hearts
      for (let i = 0; i < 6; i++) {
        newElements.push({
          id: `heart-${i}`,
          type: 'heart',
          emoji: ['💖', '💕', '💗', '💘'][Math.floor(Math.random() * 4)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 15 + 20,
          duration: Math.random() * 8 + 12,
          delay: Math.random() * 5
        })
      }

      // Create sparkles
      for (let i = 0; i < 12; i++) {
        newElements.push({
          id: `sparkle-${i}`,
          type: 'sparkle',
          emoji: ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 12 + 15,
          duration: Math.random() * 6 + 8,
          delay: Math.random() * 8
        })
      }

      setElements(newElements)
    }

    createFloatingElements()

    const handleResize = () => {
      createFloatingElements()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getAnimationProps = (element) => {
    switch (element.type) {
      case 'balloon':
        return {
          initial: { 
            x: element.x, 
            y: element.y, 
            scale: 0,
            rotate: 0
          },
          animate: {
            y: element.y - window.innerHeight - 200,
            x: element.x + (Math.sin(Date.now() * 0.001) * 100),
            scale: [0, 1, 1, 0],
            rotate: [0, 10, -10, 0]
          },
          transition: {
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      
      case 'heart':
        return {
          initial: { 
            x: element.x, 
            y: element.y, 
            scale: 0,
            rotate: 0
          },
          animate: {
            y: [element.y, element.y - 50, element.y],
            x: [element.x, element.x + 30, element.x - 30, element.x],
            scale: [0, 1, 1.2, 1, 0],
            rotate: [0, 15, -15, 0]
          },
          transition: {
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }

      case 'sparkle':
        return {
          initial: { 
            x: element.x, 
            y: element.y, 
            scale: 0,
            rotate: 0,
            opacity: 0
          },
          animate: {
            scale: [0, 1, 1.5, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 1, 1, 0],
            x: element.x + Math.sin(Date.now() * 0.002) * 50,
            y: element.y + Math.cos(Date.now() * 0.002) * 50
          },
          transition: {
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }

      default:
        return {}
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          style={{
            position: 'absolute',
            fontSize: element.size,
            userSelect: 'none',
            zIndex: element.type === 'balloon' ? 3 : 2
          }}
          {...getAnimationProps(element)}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Additional fixed decorative elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '40px',
          zIndex: 3
        }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎪
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          fontSize: '35px',
          zIndex: 3
        }}
        animate={{
          y: [15, -15, 15],
          rotate: [0, -20, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
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
          bottom: '15%',
          left: '10%',
          fontSize: '45px',
          zIndex: 3
        }}
        animate={{
          x: [-10, 10, -10],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.15, 1]
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

      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '12%',
          fontSize: '30px',
          zIndex: 3
        }}
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 25, -25, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        🎨
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        style={{
          position: 'absolute',
          top: '5%',
          right: '3%',
          fontSize: '25px',
          zIndex: 3
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '3%',
          fontSize: '28px',
          zIndex: 3
        }}
        animate={{
          scale: [1, 1.2, 1],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        🌺
      </motion.div>

      {/* Moving confetti pieces */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '20px',
            zIndex: 2
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 360],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        >
          {['🎊', '🎉', '✨', '💖', '🌟'][i]}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements 