import React, { FC } from 'react';
import facebook from '../../images/icons/facebook.svg';
import tiktok from '../../images/icons/tiktok.svg';
import twitter from '../../images/icons/twitter.svg';
import youtube from '../../images/icons/youtube.svg';
import { Navigation } from '../navigation/Navigation';
import { footerSectionData } from '../../data/pageData';
import { Logo } from '../Logo/Logo';
// import { INavigationLinkData } from '../navigation/NavigationLink';

const footerNavigationSectionKeys = Object.keys(footerSectionData.navigation);
const footeFooterNavigationLinks = footerSectionData.footer;

export const Footer: FC = () => {
  return (
    <div className='Footer'>
      <div className='Footer__navigation'></div>
      <div className='Footer__footer'>
        <div>
          <div>
            <Logo /></div>
          <div>
            <p>© {new Date().getFullYear()} Hypnosis Corporation Inc. All rights reserved.</p>
          </div>
        </div>
        <div>
          <div className='Footer__socialMediaIcons'>
            <div>
              <a href="http://">
                <img src={facebook} alt="Social media icon" />
              </a>
            </div>
            <div>
              <a href="http://">
                <img src={twitter} alt="Social media icon" />
              </a>
            </div>
            <div>
              <a href="http://">
                <img src={youtube} alt="Social media icon" />
              </a>
            </div>
            <div>
              <a href="http://">
                <img src={tiktok} alt="Social media icon" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}