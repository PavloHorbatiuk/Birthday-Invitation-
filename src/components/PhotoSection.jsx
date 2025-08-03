import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Heart } from 'lucide-react'
import { photosConfig, getPhotoPath } from '../config/photos'
import PhotoModal from './PhotoModal'

const PhotoSection = () => {
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

  const photoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  }

  // Використовуємо конфігурацію фотографій
  const photos = photosConfig.map(photo => ({
    ...photo,
    src: getPhotoPath(photo.filename)
  }))

  // Стан для модального вікна
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Функції для модального вікна
  const openPhoto = (photo) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  const goToNext = () => {
    if (selectedPhoto) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
      const nextIndex = (currentIndex + 1) % photos.length
      setSelectedPhoto(photos[nextIndex])
    }
  }

  const goToPrevious = () => {
    if (selectedPhoto) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
      const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
      setSelectedPhoto(photos[prevIndex])
    }
  }

  const hasNext = selectedPhoto && photos.findIndex(p => p.id === selectedPhoto.id) < photos.length - 1
  const hasPrevious = selectedPhoto && photos.findIndex(p => p.id === selectedPhoto.id) > 0

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
        style={{ maxWidth: '1000px', width: '100%' }}
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
            📸
          </motion.div>
          
          <motion.h2
            variants={photoVariants}
            style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              color: '#fff',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Наші спогади 💕
          </motion.h2>
          
          <motion.p
            variants={photoVariants}
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Цілий рік незабутніх моментів!
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={photoVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              onClick={() => openPhoto(photo)}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '20px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative frame */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
                  borderRadius: '25px',
                  zIndex: -1,
                  opacity: 0
                }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              
              {photo.hasRealPhoto ? (
                <motion.div
                  style={{
                    width: '100%',
                    height: '150px',
                    marginBottom: '15px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.1)'
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.description}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                    onError={(e) => {
                      // Якщо фото не завантажилося, показуємо емодзі
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                  <motion.div
                    style={{ 
                      fontSize: '80px', 
                      display: 'none',
                      textAlign: 'center',
                      lineHeight: '150px'
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {photo.emoji}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  style={{ fontSize: '80px', marginBottom: '15px' }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {photo.emoji}
                </motion.div>
              )}
              
              <motion.h3
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  marginBottom: '8px'
                }}
              >
                {photo.description}
              </motion.h3>
              
              <motion.p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                👆 Натисніть для перегляду
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          variants={photoVariants}
          style={{
            textAlign: 'center',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Camera size={40} color="#fff" style={{ marginBottom: '15px' }} />
          <p style={{
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            <strong>Як додати фотографії:</strong>
            <br />
            1. Додайте фото в папку <code style={{background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px'}}>public/images/</code>
            <br />
            2. Оптимізуйте фото до 800x600px, до 200KB
            <br />
            3. У файлі <code style={{background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px'}}>src/config/photos.js</code> змініть <code style={{background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px'}}>hasRealPhoto: true</code> 📷✨
          </p>
        </motion.div> */}

        {/* Floating hearts decoration */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            fontSize: '25px',
            zIndex: 1
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💝
        </motion.div>
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            fontSize: '20px',
            zIndex: 1
          }}
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🌟
        </motion.div>

        {/* Модальне вікно для фотографій */}
        <PhotoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          photo={selectedPhoto}
          onNext={goToNext}
          onPrevious={goToPrevious}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      </motion.div>
    </section>
  )
}

export default PhotoSection 