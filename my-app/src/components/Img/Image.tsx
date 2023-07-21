import React,{FC} from 'react';

interface logoSrc{
  imgPath: string
}

export const Image:FC<logoSrc> = ({imgPath})=> {
  return(
      <div className='logo'>
        <img src={imgPath} alt="Newspaper logo" />
      </div>
  )
}