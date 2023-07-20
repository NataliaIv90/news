import React,{ FC } from 'react';

export interface INavigationLinkData {
  linkSrc: string;
  linkText: string;
}

export const NavigationLink: FC<{ data: INavigationLinkData }> = ({ data }) => {
  return (
    <li className='NavigationLink'>
      <a href={data.linkSrc} target='_parent'>
        {data.linkText}
      </a>
    </li>
  );
};