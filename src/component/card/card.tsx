import React from "react";
import { CardDiv, CardP, H5 } from "./cardStyle";

export const Card=(props:{title:string, text:string, color:string, corner:string})=>{

    return <CardDiv style={{backgroundColor:props.color, borderRadius:props.corner}}>
                <H5 >{props.title}</H5>
                <CardP>{props.text}</CardP>
            </CardDiv>
}