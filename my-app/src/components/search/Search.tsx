import React,{FC} from 'react';
import search from '../../images/icons/search.svg';
import { SearchInput, ISearchInput } from './SearchInput';

export interface ISearchInputData{
  searchInputData: ISearchInput;
}

export const Search:FC<ISearchInputData> = ({searchInputData})=> {
  return(
      <div className='Search'>
        <img src={search} alt="Search icon" />
        <SearchInput placeholder={searchInputData.placeholder} value={searchInputData.value} />
      </div>
  )
}