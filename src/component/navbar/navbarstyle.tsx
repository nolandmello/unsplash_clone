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
  
  export const Navbar = styled.nav`
    background: #ffffff;
    font-family: ${Theme.fonts.heading};
    font-weight:500;
    font-size:14px;

    width: 100%; 
    position:fixed;
    z-index:1;
    top:0;
    a { color: black; text-decoration: none; }
    `;
  

  export const Unsplash = styled.a`
    font-weight: bold;
    font-style: italic;
  `
  export const Logo = styled.img`
  height:40px;
  width:auto;
  position:relative;
  top:0;
  left:0`
  
  export const Ul = styled.span`
    display: flex;
    gap:10px;
    overflow: auto;
    justify-content: space-between;
    list-style:none;
    align-items: center;
    padding:10px;
    white-space: nowrap;
    margin-right: 1rem;
    `;
  
  export const Li1 = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  width: auto`;

export const d1= styled.div`
  background-color: #d1d1d1;
  height: 32px;
  width: 1px;
`;