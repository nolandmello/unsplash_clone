import React, { useEffect, useState } from "react";
import { Footer, Name, Text, TitleBG } from './homestyle'
import { Search } from "../search/search component";
import { Collage } from "../scroll/collage";
import Button from "../button/buttonComponent";
import { Images } from "../../shared/services/gallery/fetchImages";
import { Nav } from "../../shared/links";
import { render } from "@testing-library/react";
import { useLocation } from "react-router-dom";

export const Banner=(props:{path:string, query:any})=>{
    const [images , setImages]= useState();
    var url=" ";
    var link:string =" " ;
    const path = useLocation().pathname;

    const { links2 } = Nav ;
    console.log(links2)
    
      
    function randomNumberInRange(min:number, max:number) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    useEffect(()=>{
        if(props.query==null)
        link=`https://api.unsplash.com/${props.path}?client_id=mXgzxmoNiDoxaN-yuhtclfaBSrNMb61GvBJ4ARxX_ss`
        else
        link=`https://api.unsplash.com/${props.path}?client_id=mXgzxmoNiDoxaN-yuhtclfaBSrNMb61GvBJ4ARxX_ss&query=${props.query}`

        const FetchImages = async() =>{
            console.log(link);
            const response =await fetch(link)
            const data= await response.json()
            console.log(data)
            if(!props.query)
            setImages(data.urls.full)
            else
           {console.log(data.total) 
            setImages(data.results[randomNumberInRange(1, 10)].urls.full)}
            console.log(data);

        }
        FetchImages()
    },[props.query])


    return (     
        <main>
        <Footer style={{ backgroundImage: `url(${images})`}}>
            <TitleBG/>

            <div style={{position:"absolute"}}>
               {props.query==null 
                    ? <>
                        <Name>Unsplash</Name>
                        <Text>The internet’s source of freely-usable images.<br/>
                            Powered by creators everywhere.</Text>
                         {/* component-> */}<Search style="5px" colour="white" className="banSearch"/></>


                    :<div style={{display:"flex" , flexDirection:"column" , width:"100vw"}}>
                    {links2.filter( (link: { to: string; }) => link.to == path )
                        .map((link)=> <><Name style={{width:"50vw", minWidth:"600px", margin:"10px 50px"}}>{link.name}</Name>
                                        <Text style={{width:"50vw", minWidth:"600px",margin:"10px 50px"}}>{link.message}</Text></>)}
                        <div style={{width:"50vw",margin:"0 45px"}}> {/* component-> */}<Button children={`submit to ${props.query}`} onClick={function (): void {
                                                        throw new Error("Function not implemented.");} }/>
                            </div>
                       
                    </div>}
            </div>
        </Footer>
      
        </main>);
}


