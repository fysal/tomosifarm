import React from 'react'

const Footer = () => {
  return (
    <div className="bg-primary text-white py-3">
      <div className="container py-4 small text-center fw-bold letter-spacing-3" style={{letterSpacing:"2px"}}>
        Copyright © {new Date().getFullYear()} Tomosi's Farm | All Rights
        Reserved
      </div>
    </div>
  );
}

export default Footer