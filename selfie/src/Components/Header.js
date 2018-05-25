import React from 'react';
import {Link} from 'react-router-dom';

 function Header() {
  return (
    <div id='submit'>
       SELFIE
       <Link to='/'>
            <p>DASHBOARD</p>
        </Link>
        <Link to='/form'>
            <p>add Juan</p>
        </Link>
    </div>
  )
}

export default Header;
