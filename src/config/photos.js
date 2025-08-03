// Конфігурація фотографій для сайту
// Легко змінювати інформацію про фото тут

export const photosConfig = [
  {
    id: 1,
    filename: 'photo1.jfif', // Назва файлу в папці public/images/
    description: 'Перші дні',
    emoji: '👶',
    hasRealPhoto: true, // Змініть на true коли додасте фото
    alt: 'Перші дні життя малечі'
  },
  {
    id: 2,
    filename: 'photo2.jpg',
    description: 'Перша посмішка',
    emoji: '😊',
    hasRealPhoto: false,
    alt: 'Перша посмішка нашої принцеси'
  },
  {
    id: 3,
    filename: 'photo3.jpg',
    description: 'Граємося',
    emoji: '🎈',
    hasRealPhoto: false,
    alt: 'Граємося з іграшками'
  },
  {
    id: 4,
    filename: 'photo4.jpg',
    description: 'Час їжі',
    emoji: '🍼',
    hasRealPhoto: false,
    alt: 'Час годування'
  },
  {
    id: 5,
    filename: 'photo5.jpg',
    description: 'Солодкі сни',
    emoji: '😴',
    hasRealPhoto: false,
    alt: 'Спить солодко'
  },
  {
    id: 6,
    filename: 'photo6.jpg',
    description: 'Наша принцеса',
    emoji: '👑',
    hasRealPhoto: false,
    alt: 'Наша маленька принцеса'
  }
]

// Функція для отримання шляху до фото
export const getPhotoPath = (filename) => `/images/${filename}`

// Функція для перевірки чи фото завантажене
export const isPhotoLoaded = (photoId) => {
  const photo = photosConfig.find(p => p.id === photoId)
  return photo?.hasRealPhoto || false
}