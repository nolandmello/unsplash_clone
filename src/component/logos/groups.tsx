import React from "react";
import { Inner } from "./inner";


export const Groups=(props:{
    group:Array<{scale:string, delay:string, to:string}>,
    duration:string,
    direction:string
    })=>{
    return <div style={{display:"flex"}}>
                {/* component-> */}<Inner group={props.group} duration={props.duration} direction={props.direction}/>
            </div>
}