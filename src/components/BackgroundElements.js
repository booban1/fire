import React from 'react'
import ellipse from '../ellipse.svg';


export default function BackgroundElements() {
  return (
    <div className='ellipse-bg' 
    style={{ backgroundImage: `url(${ellipse})`}}
    >my elipse here
   
    </div>
  )
  
}
