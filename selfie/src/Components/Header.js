import React from 'react';
import {Link} from 'react-router-dom';

 function Header() {
  return (
    <div id='submit'>
       SELFIE
       <Link to='/'>
            <p>DatBoi</p>
        </Link>
        <Link to='/form'>
            <p>addJuan</p>
        </Link>
    </div>
  )
}

export default Header;
