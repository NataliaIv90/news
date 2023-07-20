import React,{FC} from 'react';
import logo from '../../images/icons/logo.svg';

export const Logo:FC = ()=> {
  return(
      <div className='logo'>
        <img src={logo} alt="Newspaper logo" />
      </div>
  )
}