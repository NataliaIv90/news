import React,{useState, FC} from 'react';

export interface ISearchInput{
  placeholder: string;
  value: string;
}

export const SearchInput:FC<ISearchInput> = ({placeholder, value})=> {
  const [inputValue, setValue] = useState<string>(value)
  return(
      <div className='SearchInput'>
        <input 
        onChange={(e)=>{
          setValue(e.target.value)}} 
          type="text" 
          name="searchInput"  
          placeholder={placeholder} 
          value={inputValue} 
          style={{border:'none', outline:'none', padding:'5px'}}/>
      </div>
  )
}