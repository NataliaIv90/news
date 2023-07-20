import React,{ FC} from 'react';

export interface ISearchInput{
  placeholder: string;
  value: string;
}

export const SearchInput:FC<ISearchInput> = ({placeholder, value})=> {
  return(
      <div className='SearchInput'>
        <input type="text" name="searchInput" id="searchInput" placeholder={placeholder} value={value}/>
      </div>
  )
}