import React, { FC } from 'react';
import { NavigationLink } from './NavigationLink';
import { INavigationLinkData } from './NavigationLink';

interface INavigationProps {
  data: INavigationLinkData[];
  style?:{}
}

export const Navigation: FC<INavigationProps> = ({ data,  style }) => {
  return (
    <ul className='Navigation' style={style} >
      {data.map((linkItemData, index) => (
        <NavigationLink key={index} data={linkItemData} />
      ))}
    </ul>
  );
};