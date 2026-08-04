import React from 'react';
import '../css/components/TechStackEntry.css';

const TechStackEntry = ({ name, Icon, iconURL }) => {
  return (
    <div className="tech-stack-entry">
      {Icon ?
        <Icon/> :
        <img src={iconURL} height={32} width={32} alt={name}/>}
      <span className="tech-stack-entry-text">{name}</span>
    </div>
  )
};

export default TechStackEntry;