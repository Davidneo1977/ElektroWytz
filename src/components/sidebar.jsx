
import React from 'react';

// Data pro kategorie
const categories = ['Instalace', 'Revize', 'Drážkování','Zapojení', 'Údržba'];

function Sidebar({ onSelectCategory }) {
  return (
    <div className="sidebar">
      <h3>Seznam prací</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
