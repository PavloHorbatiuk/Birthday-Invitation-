import React from "react";
import oneYearSvg from '../assets/1year.svg';
import balloonsSvg from '../assets/needcoffee_Balloons.svg';

const PartyInvitation = () => {
  return (
    <div className="party-container">
      {/* Floating background balloons */}
      <div className="floating-balloons">
        <img src={balloonsSvg} alt="" className="floating-balloon balloon-1" />
        <img src={balloonsSvg} alt="" className="floating-balloon balloon-2" />
        <img src={balloonsSvg} alt="" className="floating-balloon balloon-3" />
      </div>
      
      <div className="invitation-card">
        <div className="card-header">
          <div className="party-hat">
            {/* <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C14 2 16 4 16 6C16 8 14 10 12 10C10 10 8 8 8 6C8 4 10 2 12 2Z" fill="#FF69B4"/>
              <path d="M6 4C8 4 10 6 10 8C10 10 8 12 6 12C4 12 2 10 2 8C2 6 4 4 6 4Z" fill="#DDA0DD"/>
              <path d="M18 4C20 4 22 6 22 8C22 10 20 12 18 12C16 12 14 10 14 8C14 6 16 4 18 4Z" fill="#FFB6C1"/>
              <line x1="12" y1="10" x2="12" y2="20" stroke="#8B4513" strokeWidth="1"/>
              <line x1="6" y1="12" x2="8" y2="20" stroke="#8B4513" strokeWidth="1"/>
              <line x1="18" y1="12" x2="16" y2="20" stroke="#8B4513" strokeWidth="1"/>
            </svg> */}
            <img src={balloonsSvg} alt="Party Balloons" className="balloons-decoration" />
          </div>
          <h1 className="party-title">  Запрошення на День народження Мелісочки</h1>
          <div className="celebration-icons">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5.5L22 7.5V9L20 10L22 11V12.5L14 10.5V12C14 13.1 13.1 14 12 14S10 13.1 10 12V10.5L2 12.5V11L4 10L2 9V7.5L10 5.5V4C10 2.9 10.9 2 12 2Z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6C13.11 6 14 6.89 14 8V10H18C18.55 10 19 10.45 19 11V13C19 13.55 18.55 14 18 14V18C18 19.11 17.11 20 16 20H8C6.89 20 6 19.11 6 18V14C5.45 14 5 13.55 5 13V11C5 10.45 5.45 10 6 10H10V8C10 6.89 10.89 6 12 6Z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5.5L22 7.5V9L20 10L22 11V12.5L14 10.5V12C14 13.1 13.1 14 12 14S10 13.1 10 12V10.5L2 12.5V11L4 10L2 9V7.5L10 5.5V4C10 2.9 10.9 2 12 2Z" />
            </svg>
          </div>
        </div>

        <div className="card-body">
          {/* <div className="birthday-girl">
            <div className="name-decoration">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9,11H7L9,9L11,11H9V13H11L9,15L7,13H9V11M15,11V13H13L15,15L17,13H15V11H17L15,9L13,11H15M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
              </svg>
            </div>
            <div className="name-decoration">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9,11H7L9,9L11,11H9V13H11L9,15L7,13H9V11M15,11V13H13L15,15L17,13H15V11H17L15,9L13,11H15M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
              </svg>
            </div>
          </div> */}

          <div className="birthday-design-container">
            <img 
              src={oneYearSvg} 
              alt="1 Year" 
              className="birthday-design"
            />
          </div>

          <div className="party-details">
            <div className="detail-item">
              <span className="detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
                </svg>
              </span>
              <span className="detail-text">30 серпня 2025 року</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
                </svg>
              </span>
              <span className="detail-text">15:00</span>
            </div>
            <div className="detail-item location-item">
              <span className="detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </span>
              <div className="location-info">
                <span className="detail-text location-name">
                  Ресторація "Товста качка" на Дніпрі
                </span>
                <span className="location-address">
                  просп. Володимира Івасюка, 14Г, Київ
                </span>
                <a
                  href="https://www.google.com/maps?q=Volodymyra+Ivasiuka+Ave,+14%D0%93,+Kyiv,+Ukraine,+02000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-button"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  Відкрити в Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="party-message">
            <p>Будемо раді бачити вас на нашому святі!</p>
            <p>Приходьте з гарним настроєм та усмішками! 🎉</p>
          </div>

          <div className="party-signature">
            З любов'ю, Меліса, Паша та Олеся
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#ff6b9d"
              style={{ display: "inline", marginLeft: "5px" }}
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInvitation;
