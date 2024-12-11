import React from 'react';
import { FooterWrapper, SocialIcons, IconLink } from './styles';
import {footerLinks} from '../../data/data'

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      <SocialIcons>
        {footerLinks.map((link) => (
          <IconLink
            key={link.name}
            href={link.href}
            target="_blank"
            aria-label={link.name}
          >
            {link.icon}
          </IconLink>
        ))}
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
