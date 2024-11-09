import React from 'react';
import './footer.scss';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h2>Kontakt:</h2>
        <p>David Wybranietz</p>
        <p>Oldřichovice 264</p>
        <p>Třinec 739 61</p>
        <p>Telefon: 724 934 339</p>
        <p>Email: <a href="mailto:davidneo@seznam.cz">davidneo@seznam.cz</a></p>
      </div>
      
      <div className="footer-copyright">

        © 2024 ElektroWytz

      </div>
    </footer>
  );
}

export default Footer;
