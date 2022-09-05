import { event } from "jquery";
import  { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {SStle} from "./SearchStyle";


export const Search:any =(props:{style : any, colour: string , className:string })=>
{ 
    let field= useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
    let navigate= useNavigate();
    const handleChange = (event: { target: { value: any; }; }) => {
        setMessage(event.target.value);
        // console.log('value is:', field.current?.value);
      };


      const handleKeyDown = (event: { key: string; }) => {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") 
          if (message.length!= 0)
          {
           navigate(`/s/photos/${field.current?.value.split(" ").join("-")}`)
         }
      };
    
    return(<div style={{display:"flex"}}>
<SStle ref={field} type="text" name="photo" onKeyDown={handleKeyDown} placeholder="Search photos" onChange={handleChange} style={{borderRadius: props.style, backgroundColor:props.colour}}/>
</div>
    );
}

function handleKeyDown(event: JQuery.EventExtensions) {
  throw new Error("Function not implemented.");
}
