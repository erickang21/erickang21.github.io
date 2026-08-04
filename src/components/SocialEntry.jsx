import React from 'react';
import '../css/components/SocialEntry.css';

const SocialEntry = ({ username, icon, link }) => {
  return (
    <div className="social-entry">
      {icon}
      <a href={link} target="_blank">{username}</a>
    </div>
  )
};

export default SocialEntry;
