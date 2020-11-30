import React from 'react';import './ContactRow.css';
import BadgeAvatars from './Badge';
function SidebarRow({title}){
  
  return (
    <div className="ContactRow">
      <BadgeAvatars />
      <h4>{title}</h4>
    </div>  

  );
  
}

export default SidebarRow;
