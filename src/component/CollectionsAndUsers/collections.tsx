import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { UnsplashImage } from "../../images/image";
import '../scroll/collage.scss';
import { Images } from "../../shared/services/gallery/fetchImages";
import { useParams } from "react-router-dom";
import { Cimages } from "./cImages";

export const  Collection =()=>{
    const [images, setImages] = React.useState<any>([]);
    const [loaded, setIsLoaded] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "mXgzxmoNiDoxaN-yuhtclfaBSrNMb61GvBJ4ARxX_ss";
    var image = "";
    let {items}= useParams();
    image =`${apiRoot}/search/collections?client_id=${accessKey}&query=${items}`



   const fetchImages = (count: number) => {
  setPage(page + 1)
  axios
    .get<any>(`${image}&count=${count}&page=${page}`)
    .then(res => {
     setImages((oldData: any) => [...oldData, ...res.data.results]);
      // console.log(res.data.results)
      setIsLoaded(true);
    });
};

useEffect(() => {
  setIsLoaded(false);
  fetchImages(6)
}, [])

return (<div style={{display:"flex", flexDirection:"column" , alignItems:"center", marginTop:"65px"}}>
<div style={{display:"flex", maxWidth:"1300px", alignItems:"begining", width:"100vw", marginLeft:"50px", marginTop:"3rem"}}>
    <h1>{items?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h1>
</div>
  <div className="container" style={{ display: "flex", alignItems: "center" }}>
    <InfiniteScroll
      dataLength={images}
      next={() => fetchImages(6)}
      hasMore={true}
      loader={
        <div className="loader">Loading...</div>}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="image-grid" style={{ marginTop: "10px", maxWidth: "1300px", width: "calc(100vw - 4rem)" }}>
          {
          loaded
            ?<>
              {images.map((image: any, index:number)=>{
                     return <div id={image.id} style={{display:"flex" , flexDirection:"column", position:"relative"}}>
                        <Cimages link={`${image.links.photos}?client_id=${accessKey}`} count={image.total_photos}/>
                        <div style={{display:"flex" , flexDirection:"column", position:"relative"}}>
                        <h3>{image.title}</h3>
                        <p>{image.total_photos} photos. Curated by {image.user.name}</p>
                        </div>
                     
                     </div>
                  //   })
                  //    }
                  // </div>
                })
              } 
              </>
          
            : ""
          }
         

        </div>
      </div>
    </InfiniteScroll>
</div>
  </div>
);
};


