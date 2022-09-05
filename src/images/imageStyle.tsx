import React from "react";
import styled from "styled-components";

export const Img= styled.img `
max-width: 100%;
object-fit: contain;
display: block`

export const Div= styled.div `
position: absolute;
background: rgba(0,0,0,0.6);
width:100%;
height:100%;
opacity:0;
transition: opacity 0.25s;


&:hover {
   opacity:1
  }
`