import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {Navbar,Ul, Tabs} from '../navbar2/navbar2style';

export const SearchNav=()=>
{
let {items}= useParams();

    return <>
     <Navbar style={{ position:"fixed", zIndex:"10"}}>
       <Ul>
         <Tabs >
         <li id='Li1' key={"photos"} style={{flexShrink:"0", margin:"10px"}} >
            <Link to={`/s/photos/${items}`} >
                photos
            </Link></li>
            <li id='Li1' key={"collections"} style={{flexShrink:"0", margin:"10px"}} >
            <Link to={`/s/collections/${items}`} >
            collections
            </Link></li>
            <li id='Li1' key={"users"} style={{flexShrink:"0", margin:"10px"}} >
            <Link to={`/s/users/${items}`} >
            users
            </Link></li>
         </Tabs>
         
         <Tabs >
         <li id='Li1' key={"orientation"} style={{flexShrink:"0", margin:"10px"}} >
         orientation</li>
            <li id='Li1' key={"color"} style={{flexShrink:"0", margin:"10px"}} >
            color</li>
            <li id='Li1' key={"sort"} style={{flexShrink:"0", margin:"10px"}} >
            sort</li>
         </Tabs>
         </Ul></Navbar>
         <Outlet/></>
        }