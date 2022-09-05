import React, { useEffect, useRef } from "react";
import {Navbar,Ul, Partition, Tabs} from './navbar2style';
import { NavLinks } from '../navLinks';
import { Style } from "util";
import { Arrow } from "../arrow/arrow";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Nav } from "../../shared/links";


const Feature = React.createRef() as React.RefObject<HTMLDivElement>;

export const Nav2=()=>{
    const { links1, links2 } = Nav ;
    const right = useRef<HTMLDivElement>(null);
    const left = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLDivElement>(null);
   

    useEffect(()=> {
      console.log(nav);
  }, [])

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
    
      }
    }, speed);
  };
  

    return(
       <>
        <Navbar>
          <Ul>
            
            <Tabs >
              {/* component-> */}<NavLinks links={links1}/>
            </Tabs>
             <Partition/>

            <Tabs className="menu" 
                  style={{overflowX: "auto", width: "100%", msOverflowX:"hidden"}} ref={nav}>
            <div ref={left} className="right" style={{cursor:"pointer" ,position:"fixed"}} onClick={()=> {
               nav.current && sideScroll(nav.current , 25, 300, -10);}}>
            {/* component-> */}<Arrow type="left"/></div>



            <div ref={nav} style={{display:"flex" }}   className="navbar">
                      {/* component-> */}<NavLinks links={links2}/></div>



            <div ref={right} className="right" style={{cursor:"pointer" }} onClick={()=> {
                nav.current && sideScroll(nav.current , 25, 300, 10);}}>
            {/* component-> */}<Arrow type="right"  /></div>


            
            </Tabs>
          </Ul>
        </Navbar>
      
       </>
    );
  
}



