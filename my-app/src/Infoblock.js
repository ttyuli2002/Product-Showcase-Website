import React from 'react';
import './Infoblock.css'; // Ensure your CSS is set up to handle images

function InfoBlock({ title, content, image }) {
  return (
    <div className="info-block">
      {image && <img src={image} alt={title} className="info-image" />}
      <div className="info-text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default InfoBlock;