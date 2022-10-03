import { event } from "jquery";
import  { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {SStle} from "./SearchStyle";


export const Search:any =(props:{style : any, colour: string , className:string })=>
{ 
  const [params, setParams] = useSearchParams();

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
            let p = field.current?.value.split(" ").join("-")
            p && setParams(p)
            console.log(params)
          //  navigate(`/s/photos/${params}`)
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
