import React, { FC } from 'react';

export interface INavigationLinkData {
  linkSrc: string;
  linkText: string;
}

export const NavigationLink: FC<{ data: INavigationLinkData }> = ({ data }) => {
  return (
    <li className='NavigationLink' style={{ listStyle: "none" }} key={typeof(data.linkText)==="string" ? data.linkText : Math.round(Math.random()*100)}>
      <a href={data.linkSrc} target='_parent'>
        {data.linkText}
      </a>
    </li>
  );
};