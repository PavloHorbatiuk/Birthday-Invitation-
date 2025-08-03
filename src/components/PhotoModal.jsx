import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Download } from 'lucide-react'

const PhotoModal = ({ isOpen, onClose, photo, onNext, onPrevious, hasNext, hasPrevious }) => {
  // Закриття по ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      // Блокуємо скрол фону
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Навігація стрілками
  useEffect(() => {
    const handleArrows = (event) => {
      if (event.keyCode === 37 && hasPrevious) { // Ліва стрілка
        onPrevious()
      }
      if (event.keyCode === 39 && hasNext) { // Права стрілка
        onNext()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleArrows)
    }
    
    return () => {
      document.removeEventListener('keydown', handleArrows)
    }
  }, [isOpen, onNext, onPrevious, hasNext, hasPrevious])

  if (!photo) return null

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="photo-modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <motion.div
            className="photo-modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '20px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              boxSizing: 'border-box', // Важливо для правильного розрахунку розмірів
              overflow: 'hidden' // Запобігаємо виходу за межі
            }}
          >
            {/* Кнопка закриття */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                color: 'white'
              }}
            >
              <X size={20} />
            </motion.button>

            {/* Кнопки навігації */}
            {hasPrevious && (
              <motion.button
                onClick={onPrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '24px',
                  zIndex: 10
                }}
              >
                ←
              </motion.button>
            )}

            {hasNext && (
              <motion.button
                onClick={onNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '24px',
                  zIndex: 10
                }}
              >
                →
              </motion.button>
            )}

            {/* Фотографія - ВИПРАВЛЕНО */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{
                width: '100%',
                // Розраховуємо доступну висоту: віднімаємо padding, заголовок, кнопки та відступи
                height: 'calc(90vh - 200px)', // Залишаємо місце для тексту та кнопок
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                overflow: 'hidden'
              }}
            >
              {photo.hasRealPhoto ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: '15px',
                    objectFit: 'contain',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    display: 'block'
                  }}
                />
              ) : (
                <div style={{
                  fontSize: '150px',
                  padding: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {photo.emoji}
                </div>
              )}
            </motion.div>

            {/* Інформація про фото */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                textAlign: 'center',
                width: '100%',
                flexShrink: 0 // Запобігаємо стисканню тексту
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#333',
                marginBottom: '10px',
                margin: '0 0 10px 0'
              }}>
                {photo.description}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '20px',
                margin: '0 0 20px 0'
              }}>
                {photo.alt}
              </p>

              {/* Дії */}
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 20px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  <Heart size={16} />
                  Подобається
                </motion.button>

                {photo.hasRealPhoto && (
                  <motion.a
                    href={photo.src}
                    download={`${photo.description}.jpg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'linear-gradient(45deg, #48dbfb, #00d2d3)',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '10px 20px',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    <Download size={16} />
                    Завантажити
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Навігаційні підказки */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.8rem',
                color: '#666',
                textAlign: 'center'
              }}
            >
              ESC - закрити • ← → - навігація
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Демо для тестування
const PhotoModalDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const photo = {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Красивий пейзаж гір',
    description: 'Гірський пейзаж',
    hasRealPhoto: true,
    emoji: '🏔️'
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600'
        }}
      >
        Відкрити фото модал
      </button>
      
      <PhotoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        photo={photo}
        onNext={() => console.log('Next')}
        onPrevious={() => console.log('Previous')}
        hasNext={true}
        hasPrevious={true}
      />
    </div>
  )
}

export default PhotoModalDemo