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
  style?: {}
}

export const Header: FC<IHeaderData> = ({ navigationData, searchInputData }) => {
  return (
    <div className='Header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 50px' }}>
      <div>
        <a href='/'>
          <Image imgPath={logo} />
        </a>
      </div>
      <Navigation data={navigationData} style={{ display: 'flex', justifyContent: 'center', alighItems: 'center', gap: '30px' }} />
      <Search searchInputData={searchInputData} />
    </div>
  )
}