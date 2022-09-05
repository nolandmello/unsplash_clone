import React from "react";
import { Link } from "react-router-dom";
import "../../src/component/navbar2/animcontroller"

export const NavLinks =(props: {
    links:  Array<{ name: string; to: string }>
  }) => {

    // getting list of links and putting into navbar
    const Links: any = () => 
    props.links.map((link: { name: string, to: string }) => 
    <li id='Li1' key={link.name} style={{flexShrink:"0", margin:"10px"}} >
            <Link to={link.to} >
                {link.name}
            </Link>
    </li>
        );
   
    return (
    <Links />
   );
  }