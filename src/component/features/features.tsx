import React from "react";
import { Card } from "../card/card";
import { FDiv, FImg } from "./featuresStyle";

export const Features=(props:{
    color:string, 
    corner:string
    feature: Array<{title:string, img:string, text:string, }>
    })=>{
        const Features:
            any = () => 
            props.feature.map((link: { title:string, img:string, text:string }) => 
                <FDiv>
                    <FImg src= {link.img}/>
                    {/* component-> */}<Card title={link.title} text={link.text} color={props.color} corner={props.corner}/>
                </FDiv>);

return <Features/>
}