import React from 'react';

const PartyInvitation = () => {
  return (
    <div className="party-container">
      <div className="invitation-card">
        <div className="card-header">
          <div className="party-hat">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5.5L22 7.5V9L20 10L22 11V12.5L14 10.5V12C14 13.1 13.1 14 12 14S10 13.1 10 12V10.5L2 12.5V11L4 10L2 9V7.5L10 5.5V4C10 2.9 10.9 2 12 2M8 17C8.6 17 9 17.4 9 18S8.6 19 8 19 7 18.6 7 18 7.4 17 8 17M16 17C16.6 17 17 17.4 17 18S16.6 19 16 19 15 18.6 15 18 15.4 17 16 17M12 20C12.6 20 13 20.4 13 21S12.6 22 12 22 11 21.6 11 21 11.4 20 12 20Z"/>
            </svg>
          </div>
          <h1 className="party-title">З Днем Народження!</h1>
          <div className="celebration-icons">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5.5L22 7.5V9L20 10L22 11V12.5L14 10.5V12C14 13.1 13.1 14 12 14S10 13.1 10 12V10.5L2 12.5V11L4 10L2 9V7.5L10 5.5V4C10 2.9 10.9 2 12 2Z"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6C13.11 6 14 6.89 14 8V10H18C18.55 10 19 10.45 19 11V13C19 13.55 18.55 14 18 14V18C18 19.11 17.11 20 16 20H8C6.89 20 6 19.11 6 18V14C5.45 14 5 13.55 5 13V11C5 10.45 5.45 10 6 10H10V8C10 6.89 10.89 6 12 6Z"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5.5L22 7.5V9L20 10L22 11V12.5L14 10.5V12C14 13.1 13.1 14 12 14S10 13.1 10 12V10.5L2 12.5V11L4 10L2 9V7.5L10 5.5V4C10 2.9 10.9 2 12 2Z"/>
            </svg>
          </div>
        </div>
        
        <div className="card-body">
          <p className="party-subtitle">Запрошуємо вас відсвяткувати перший рік життя нашої принцеси</p>
          
          <div className="birthday-girl">
            <div className="name-decoration">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,11H7L9,9L11,11H9V13H11L9,15L7,13H9V11M15,11V13H13L15,15L17,13H15V11H17L15,9L13,11H15M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
            </div>
            <div className="birthday-name">Меліса</div>
            <div className="name-decoration">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,11H7L9,9L11,11H9V13H11L9,15L7,13H9V11M15,11V13H13L15,15L17,13H15V11H17L15,9L13,11H15M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
            </div>
          </div>
          
          <div className="age-badge">1 рік</div>
          
          <div className="party-details">
            <div className="detail-item">
              <span className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
                </svg>
              </span>
              <span className="detail-text">30 серпня 2025 року</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"/>
                </svg>
              </span>
              <span className="detail-text">14:30</span>
            </div>
            <div className="detail-item location-item">
              <span className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                </svg>
              </span>
              <div className="location-info">
                <span className="detail-text location-name">Ресторація "Товста качка" на Дніпрі</span>
                <span className="location-address">просп. Володимира Івасюка, 14Г, Київ</span>
                <a 
                  href="https://www.google.com/maps?q=Volodymyra+Ivasiuka+Ave,+14%D0%93,+Kyiv,+Ukraine,+02000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="maps-button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                  Відкрити в Google Maps
                </a>
              </div>
            </div>
          </div>
          
          <div className="party-message">
            <p>Будемо раді бачити вас на цьому особливому святі!</p>
            <p>Приходьте з гарним настроєм та усмішками! 🎉</p>
          </div>
          
          <div className="party-signature">
            З любов'ю, наша сім'я 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff6b9d" style={{display: 'inline', marginLeft: '5px'}}>
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInvitation;
