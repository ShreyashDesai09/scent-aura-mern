import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        Scent <span>Aura</span>
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar