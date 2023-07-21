import React, { FC, CSSProperties } from 'react';
import facebook from '../../images/icons/facebook.svg';
import tiktok from '../../images/icons/tiktok.svg';
import twitter from '../../images/icons/twitter.svg';
import youtube from '../../images/icons/youtube.svg';
import { Navigation } from '../navigation/Navigation';
import { footerSectionData } from '../../data/pageData';
import logo from '../../images/icons/logo.svg';
import { Image } from '../Img/Image';


const footerNavigationWrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '3%',
  textAlign: 'center'
}

const flexRight: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '3%'
}

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
    <div className='Footer' style={{ padding: "20px 50px" }}>
      <div style={footerNavigationWrapperStyle} className='Footer__navigation'>
        {footerNavigationSectionKeys.map((el, index) => (
          <div>
            <h3>{el.toUpperCase()}</h3>
            <Navigation
              key={index}
              data={footerSectionData.navigation[el as keyof typeof footerSectionData.navigation]}
              style={{ padding: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}
            />
          </div>
        ))}
      </div>
      <div className='Footer__footer' style={footerNavigationWrapperStyle}>
        <div>
          <div>
            <a href='/'>
              <Image imgPath={logo} />
            </a>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Hypnosis Corporation Inc. All rights reserved.</p>
          </div>
        </div>
        <div >
          <div className='Footer__socialMediaIcons' style={flexRight}>
            {socialMediaData.map((el) => {
              return (<a href={el.linkSrc} target="_blank" rel="noreferrer noopener"><Image imgPath={el.linkText} /></a>)
            })}
          </div>
          <div>
            <Navigation data={footeFooterNavigationLinks} style={{ display: 'flex', justifyContent: 'center', alighItems: 'center', gap: '30px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}