import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { 
  Heart, 
  Gift, 
  Cake, 
  MapPin, 
  Clock, 
  Calendar,
  Music,
  Camera,
  Star,
  Sparkles
} from 'lucide-react'

import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import PhotoSection from './components/PhotoSection'
import DetailsSection from './components/DetailsSection'
import RSVPSection from './components/RSVPSection'
import FloatingElements from './components/FloatingElements'

function App() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <div className="app">
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.1}
          />
        )}
      </AnimatePresence>

      <ParticleBackground />
      <FloatingElements />
      
      <HeroSection onCelebrate={triggerConfetti} />
      <PhotoSection />
      <DetailsSection />
      <RSVPSection onRSVP={triggerConfetti} />

      {/* Magical floating button */}
      <motion.button
        className="magical-button"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={triggerConfetti}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        🎉 Святкуємо!
      </motion.button>
    </div>
  )
}

export default App 