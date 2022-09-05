import React from "react";
import { useParams } from "react-router-dom";
import { Collage } from "../scroll/collage";
import { SearchNav } from "./searchNav";

export const SearchFind=()=>{
    let {items}= useParams();
    return(
        
        <div style={{display:"flex", flexDirection:"column" , alignItems:"center", marginTop:"65px"}}>
            <div style={{display:"flex", maxWidth:"1300px", alignItems:"begining", width:"100vw", marginLeft:"50px", marginTop:"3rem"}}>
                <h1>{items?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h1>
            </div>
            <Collage path={'search/photos'} query={items}/>
        </div>
    )
}