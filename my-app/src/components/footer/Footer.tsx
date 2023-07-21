import React, { FC } from 'react';
import facebook from '../../images/icons/facebook.svg';
import tiktok from '../../images/icons/tiktok.svg';
import twitter from '../../images/icons/twitter.svg';
import youtube from '../../images/icons/youtube.svg';
import { Navigation } from '../navigation/Navigation';
import { footerSectionData } from '../../data/pageData';
import logo from '../../images/icons/logo.svg';
import { Image } from '../Img/Image';
import { INavigationLinkData } from '../navigation/NavigationLink';



export const Footer: FC = () => {
  const footerNavigationSectionKeys = Object.keys(footerSectionData.navigation);
  console.log(footerNavigationSectionKeys);
  const footeFooterNavigationLinks = footerSectionData.footer;
  const socialMediaData = [{
    linkSrc: "https://www.facebook.com/",
    linkText: facebook
  }, {
    linkSrc: "https://twitter.com/",
    linkText: twitter
  }, {
    linkSrc: "https://www.youtube.com/",
    linkText: youtube
  }, {
    linkSrc: "https://www.tiktok.com/",
    linkText: tiktok
  }]

  return (
    <div className='Footer'>
      <div className='Footer__navigation'>
        {footerNavigationSectionKeys.map((el, index) => (
          <div>
            <h3>{el.toUpperCase()}</h3>
            <Navigation
              key={index}
              data={footerSectionData.navigation[el as keyof typeof footerSectionData.navigation]}
            />
          </div>
        ))}
      </div>
      <div className='Footer__footer'>
        <div>
          <div>
            <Image imgPath={logo} />
          </div>
          <div>
            <p>© {new Date().getFullYear()} Hypnosis Corporation Inc. All rights reserved.</p>
          </div>
        </div>
        <div>
          <div className='Footer__socialMediaIcons'>
            {socialMediaData.map((el) => {
              return (<Image imgPath={el.linkText} />)
            })}
          </div>
          <div>
            <Navigation data={footeFooterNavigationLinks} />
          </div>
        </div>
      </div>
    </div>
  )
}