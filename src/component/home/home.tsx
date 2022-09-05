import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Collage } from "../scroll/collage";
import { Banner } from "./banner";

export const Home=(props:{path:string})=>{

    let { filter } = useParams();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[filter])


    return(
        <main>
            {/* component-> */}<Banner path={props.path} query={filter} />
            {/* component-> */}<Collage path={props.path} query={filter}/>
        </main>
    )
}