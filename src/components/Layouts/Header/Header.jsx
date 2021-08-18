import React from 'react';
import { HeaderLogo, HeaderWrapper } from './Header.elements';
import { HomeOutlined } from '@ant-design/icons';
function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <HomeOutlined />
        <p>LOGO</p>
      </HeaderLogo>
    </HeaderWrapper>
  );
}

export default Header;
