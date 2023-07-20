import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../navigation/Navigation';
import { Search } from '../search/Search';
import { INavigationLinkData } from '../navigation/NavigationLink';
import { ISearchInput } from '../search/SearchInput';

interface IHeaderData {
  navigationData: INavigationLinkData[];
  searchInputData: ISearchInput;
}

export const Header: FC<IHeaderData> = ({ navigationData, searchInputData }) => {
  return (
    <div className='Header'>
      <Logo />
      <Navigation data={navigationData} />
      <Search searchInputData={searchInputData} />
    </div>
  )
}