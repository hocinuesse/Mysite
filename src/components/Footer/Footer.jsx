import React from 'react';
import './Footer.css';

function Footer() {

  const date = new Date()
  const minute =  date.getMinutes() > 10 ? date.getMinutes() : '0'+date.getMinutes()
  const days = date.getDate() < 10 ? '0'+date.getDate() : date.getDate()
  const date0 = days+'/'+date.getMonth()+1+'/'+ date.getFullYear()+' at '+date.getHours()+' : '+minute

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {date0}   MyPortfolio . All Rights Reserved.
          </p>
          <p>
             Designed and Built with <span style={{color: 'red'}}>Hocine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
