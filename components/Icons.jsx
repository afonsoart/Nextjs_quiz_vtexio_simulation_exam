import React from 'react'

function Circle({
  fill = " #e5e7eb",
  className = ""
  
}) {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#28a745" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  
  )
}

export default Circle