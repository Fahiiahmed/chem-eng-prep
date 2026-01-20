import React from 'react';
import '../styles/EquipmentCard.css';

function EquipmentCard({ equipment, onClick }) {
  return (
    <div 
      className="equipment-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="card-icon">
        {equipment.icon}
      </div>
      <div className="card-content">
        <h3>{equipment.name}</h3>
        <p className="card-category">{equipment.category}</p>
        <p className="card-description">{equipment.shortDesc}</p>
        <div className="card-keywords">
          {equipment.keywords.slice(0, 3).map((kw, idx) => (
            <span key={idx} className="keyword-tag">{kw}</span>
          ))}
          {equipment.keywords.length > 3 && (
            <span className="keyword-more">+{equipment.keywords.length - 3}</span>
          )}
        </div>
      </div>
      <div className="card-arrow">→</div>
    </div>
  );
}

export default EquipmentCard;