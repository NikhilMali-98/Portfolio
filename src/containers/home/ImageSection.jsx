import React from 'react';
import './ImageSection.scss';
import profileImage  from '../../IMG_20230331_161750 (1).jpg';

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="image-container">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt=" "
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
