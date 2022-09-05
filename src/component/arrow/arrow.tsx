import { produceWithPatches } from "immer";
import React from "react";


interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Arrow = (props:{type:string})=>{


 

 return(
    <>{props.type=="right"?
    <img src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
      style={{position:"absolute", right:"0",
       marginTop:"10px", 
      height: "14px",verticalAlign:"center"}}
      />
      :
      <img src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
      style={{transform: "scaleX(-1)", position:"relative",
                marginTop:"10px", 
                height: "14px"}}
                 />    

}
    
    
    </>
  

 )

}

const slide = (shift:number, ref:React.RefObject<HTMLDivElement>) => {
    // ref.current.scrollLeft += shift;
  };
