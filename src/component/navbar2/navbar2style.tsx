import React from 'react';
import styled from 'styled-components';

export const Theme = {
    colors: {
      bg: `#fff`,
      dark: `#24292e`,
      light: `#EEEEEE`,
      red: `#ff5851`,
    },
    fonts: {
      body: `IBM Plex Sans, sans-serif`,
      heading: `IBM Plex Sans, sans-serif`,
    }
    
  }
  
  export const Navbar = styled.div`
    background: #ffffff;
    font-family: ${Theme.fonts.heading};
    width: 100vw;
    padding-bottom:1px;
    box-shadow: 0 10px 10px -10px rgba(0,0,0,.2); 
    font-weight:500;
    font-size:14px;
    a { color: black; text-decoration: none; }
    `;
  
  export const Ul = styled.span`
  display: flex;
  justify-content: space-between;
  list-style:none;
  width:100vw;
  align-items: center;
  white-space: nowrap;
    `;

  export const Tabs = styled.div`
  display:flex`

  export const Partition = styled.div`
  background-color: #d1d1d1;
  height: 20px;
  width: 1px`
  