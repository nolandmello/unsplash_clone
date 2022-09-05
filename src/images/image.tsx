import React, { Children } from "react";
import styled from "styled-components";
import Button from "../component/button/buttonComponent";
import { Img, Div } from "./imageStyle";
import { saveAs } from 'file-saver'




export const UnsplashImage = (props:{url:{regular: string, full:string}, key:number , name:string ,dp:string, hire:boolean, sponsorship:any} ) => {
  
  const downloadImage = () => {
    saveAs(props.url.full, `${props.name}.jpg`) // Put your image url here.
  }

  return(
     
    <div className="image-item" style={{ position:"relative", display:"flex"}}>
      <Img src={props.url.regular} />
      <Div>
      <header style={{display:"flex", position:"absolute",
                     width:"100%", height:"100%",
                    justifyContent:"space-between",
                     alignItems:"flex-start",
                     WebkitJustifyContent:"flex-end" }}>

        {props.sponsorship!=null && <p style={{position:"absolute", right:"0"}}>sponsored</p>}
        <Button  children="like" onClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>

      <Button  children="atc" onClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>

      </header>




      <footer style={{display:"flex", position:"absolute",
                    justifyContent:"space-between",
                     width:"100%", height:"100%",
                     alignItems:"flex-end",
                     WebkitJustifyContent:"space-between" }}>

            <section style={{display:"flex", alignItems:"center", margin:"0 0 10px 10px"}}>

            <img src={props.dp} style={{ height:"30px",width:"30px",borderRadius:"50%", display:"block", overflow:"hidden", margin:"5px"}}/>

            <div style={{display:"flex",flexDirection:"column",alignItems: "flex-start", justifyContent: "space-evenly"}}>

            <p style={{color:"white", fontSize:"14px", margin:"0", padding:"0"}}>{props.name}</p>

            {props.hire && 
              <p style={{color:"white", fontSize:"12px", margin: "0 0 5px 0"}}>Available for hire</p>}

            </div>
            
           
            </section>
            <section style={{display:"flex", alignItems:"center", margin:"0 10px 10px 0"}}>
            <Button children="download" onClick={downloadImage}/>
            </section>
            
      </footer>



      </Div>
    </div>




  );
  }  
  
