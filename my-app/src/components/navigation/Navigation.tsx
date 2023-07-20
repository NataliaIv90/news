import React, { FC } from 'react';
import { NavigationLink } from './NavigationLink';
import { INavigationLinkData } from './NavigationLink';

interface INavigationProps {
  data: INavigationLinkData[];
}

export const Navigation: FC<INavigationProps> = ({ data }) => {
  return (
    <ul className='Navigation'>
      {data.map((linkItemData, index) => (
        <NavigationLink key={index} data={linkItemData} />
      ))}
    </ul>
  );
};