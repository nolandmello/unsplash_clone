import axios from "axios";
import React, { useEffect } from "react";

export const Cimages=(props:{link:string, count:number})=>{
    const [images, setImages] = React.useState<any>([]);
    const [loaded, setIsLoaded] = React.useState(false);

    const fetchImages = () => {
        axios
          .get<any>(props.link)
          .then(res => {
           setImages((oldData: any) => res.data.results?[...oldData, ...res.data.results]:[...oldData]);
            console.log(props.link)
            setIsLoaded(true);
            // console.log (images)
          });
      };

      useEffect(() => {
        fetchImages()
      }, [])

return(
    <div style={{borderRadius:"6px",display: "flex",height: "6rem",width:"100%",overflow: "hidden",perspective: "1px"}}>
        <div style={{    background: "rgb(245, 245, 245)",width: "70%"}}>
          <>{console.log(images[0]?.urls.small)}</>
        <img src={images[0]?.urls.small} style={{    objectFit: "cover",height: "100%",left: "0px",position: "absolute",width: "100%"}}/>
        </div>
        <div style={{width:"30%", display: "flex",flexDirection: "column",marginLeft: "2px"}}>
            <div style={{background: "rgb(245, 245, 245)",height: "3rem",flexGrow: "1",marginBottom: "2px"}}>
            {props.count>=2 && <img src={images[1]?.urls.small} style={{ objectFit: "cover",height: "100%",left: "0px",position: "absolute",width: "100%"}}/>}
            </div>
            <div style={{background: "rgb(245, 245, 245)",height: "3rem",flexGrow: "1"}}>
            {props.count>=3 && <img src={images[2]?.urls.small} style={{ objectFit: "cover",height: "100%",left: "0px",position: "absolute",width: "100%"}}/>}
            </div>
        </div>

    </div>
   )

}