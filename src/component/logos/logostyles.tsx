import React from "react";
import styled, { keyframes } from "styled-components";

export const Shaker= styled.div `
width:100px;
animation: shake 8s ease-in-out infinite;

@keyframes shake {
    from {
        transform: translateY(-5px);
    }

    to {
        transform: translateY(5px);
    }

}

`
export const Logo= styled.img`
height: 100%;
filter:drop-shadow(0 8px 16px rgba(0,0,0,.16));
zIndex:-10`

export const Traveller= styled.div `
display: flex;
height:100px; 
column-gap:32px;
padding-right:32px; 
animation: rotate linear infinite;


@keyframes rotate {
    from {
        transform: translateX(300%);
    }

    to {
        transform: translateX(-300%);
    }
}`



