import React from "react";
import { Nav2 } from "../navbar2/navbar2";
import { Follow } from "./followinsStyle";

export const Following=()=>
{
    return(
        
        <main style={{height:"100vh"}}>
            <Follow><h1>Following</h1>
                <p>The latest photos from photographers you follow</p>
            </Follow>
            <div>
                <p>No photos to display. Follow some Unsplash photographers and check back soon.</p>
            </div>
            
        </main>
        
    )
}