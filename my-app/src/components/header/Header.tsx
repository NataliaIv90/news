import React, { FC } from 'react';
import { Image } from '../Img/Image';
import { Navigation } from '../navigation/Navigation';
import { Search } from '../search/Search';
import { INavigationLinkData } from '../navigation/NavigationLink';
import { ISearchInput } from '../search/SearchInput';
import logo from '../../images/icons/logo.svg'

interface IHeaderData {
  navigationData: INavigationLinkData[];
  searchInputData: ISearchInput;
}

export const Header: FC<IHeaderData> = ({ navigationData, searchInputData }) => {
  return (
    <div className='Header'>
      <Image imgPath={logo} />
      <Navigation data={navigationData} />
      <Search searchInputData={searchInputData} />
    </div>
  )
}