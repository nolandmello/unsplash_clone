import React from "react";
import styled from "styled-components";

export const ProductCardContainer= styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;`

export const Img= styled.div`
width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;`


export const Footer= styled.main`
width: 100%;
    height: 100vh;
    align-items :center;
    justify-content: center;
    display: flex;
    font-size: 18px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position:"relative"
    `

    export const TitleBG = styled.div`
    position: absolute;
    background:rgba(0,0,0,0.6);
    width:100%;
    height:100%`

    export const Name= styled.h1`
    color: white;
    width:auto;
    align-items: center` 

    export const Text=styled.p`
    color: white;
    align-items: center;
    `
