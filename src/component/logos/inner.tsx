import React from "react";
import { Traveller, Shaker,Logo } from "./logostyles";

export const Inner=(props:{
    group:Array<{scale:string  , delay:string, to:string}>
    duration:string,
    direction:string
})=>{

const Logos: any =()=>
props.group.map((logo:{scale:string  , delay:string, to:string} )=>
<Traveller style={{animationDuration: props.duration}}>
    <Shaker style={{animationDelay: logo.delay , animationDirection:props.direction}}>
        <Logo src={logo.to} style={{transform:`scale(${logo.scale})`}}/>
    </Shaker>
</Traveller>

);

    return<>
            <Logos/>
            <Logos/>
            <Logos/>
        </>
}






