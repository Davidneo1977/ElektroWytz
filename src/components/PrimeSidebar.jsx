

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import './PrimeSidebar.scss';

const PrimeSidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
        <Button icon="pi pi-bars" onClick={() => setVisible(true)} label="MENU" className="custom-button" />
        <Sidebar id="sidebar" visible={visible} onHide={() => setVisible(false)} role="region">
          
        <h1>NABÍDKA</h1>
        <ul>
          <li>Uvod</li>
          <li>Drážkování</li>
          <li>Tahání kabelů</li>
          <li>Zapojení zásuvek</li>
          <li>Zapojení světel</li>
          <li>Kompletace</li>
          <li>Revize</li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default PrimeSidebar;

