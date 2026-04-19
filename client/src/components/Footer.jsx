import React from 'react'

function Footer() {
  return (

    <>

        <div className="demo-disclaimer">
            <p>Demo Project: No official content. Contact: shreyashdesai31796@gmail.com</p>
        </div>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                <h3 className="footer-logo">SCENT <span>AURA</span></h3>
                <p>Luxury fragrances curated for the sophisticated soul.</p>
            </div>
                
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#collection">Collection</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Contact</h4>
                <p>Pune, Maharashtra</p>
                <p>Email: support@scentaura.com</p>
            </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Scent Aura Boutique. All Rights Reserved.</p>
            </div>
        
        </footer>
    </>
    
  )
}

export default Footer