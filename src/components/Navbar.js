import React from 'react'
import logo from '../logo.svg';
import biceps from '../biceps.png';
function Navbar() {
  return (
    <div className='title1'>


        <div className="nav">
            <div className="nav-inner">

            <a href="/" className='logo'><img  src={logo} alt="emoji"/></a>
            <span className='heading1'>Weekly Member Performance Rating</span>
            <span className='emoj'>
                <img  src={biceps} alt="emoji"/>
            </span>

            </div>
        </div>
    </div>
  )
}

export default Navbar