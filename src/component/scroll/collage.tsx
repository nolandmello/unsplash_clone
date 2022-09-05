import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { UnsplashImage } from "../../images/image";
import './collage.scss';
import { Images } from "../../shared/services/gallery/fetchImages";
import { useParams } from "react-router-dom";


export const Collage = (props: { path: string, query: any }) => {

  const [images, setImages] = React.useState<any>([]);
  // const [arr1, setArr1] = React.useState<any>([]);
  // const [arr2, setArr2] = React.useState<any>([]);
  // const [arr3, setArr3] = React.useState<any>([]);
  const [loaded, setIsLoaded] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const apiRoot = "https://api.unsplash.com";
  const accessKey = "mXgzxmoNiDoxaN-yuhtclfaBSrNMb61GvBJ4ARxX_ss";
  var image = "";
  const count = [0,1,2];




  const fetchImages = (count: number, newPath: boolean = false) => {

    if (props.query == null)
      image = `${apiRoot}/${props.path}?client_id=${accessKey}`
    else
      image = `${apiRoot}/${props.path}?client_id=${accessKey}&query=${props.query}`

    console.log(image)
    setPage(page + 1)
    axios
      .get<any>(`${image}&count=${count}&page=${page}`)
      .then(res => {
        // setImages([...images, ...res.data]);
        if (!props.query) {
          if (newPath) setImages([])
          setImages((oldData: any) => [...oldData, ...res.data]);
        }
        else {
          if (newPath) setImages([])
          setImages((oldData: any) => [...oldData, ...res.data.results]);
        }
        // console.log(res.data.results)
        setIsLoaded(true);
      });



  };


  useEffect(() => {
    setIsLoaded(false);
    fetchImages(6, true)
  }, [props.query])


  function sliceIntoChunks(arr:Array<string>, chunkSize:number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}



  return (
    <div className="container" style={{ display: "flex", alignItems: "center" }}>
      {/* <>{console.log(props.query)}</> */}
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
                <div style={{display:"grid", columnCount:"1", gap:"24px"}}>{images.filter((_:any, index:number)=>index%3===0).map((image: any, index:number)=>{
                  return <UnsplashImage url={image.urls}
                                    key={index}
                                    name={image.user.name}
                                    dp={image.user.profile_image.small}
                                    hire={image.user.for_hire}
                            sponsorship={image.sponsorship} />

                })}</div>
                <div style={{display:"grid", columnCount:"1", gap:"24px"}}>{images.filter((_:any, index:number)=>index%3===1).map((image: any, index:number)=>{
                  return <UnsplashImage url={image.urls}
                                    key={index}
                                    name={image.user.name}
                                    dp={image.user.profile_image.small}
                                    hire={image.user.for_hire}
                            sponsorship={image.sponsorship} />
                            
                })}</div>
                <div style={{display:"grid", columnCount:"1", gap:"24px"}}>{images.filter((_:any, index:number)=>index%3===2).map((image: any, index:number)=>{
                  return <UnsplashImage url={image.urls}
                                    key={index}
                                    name={image.user.name}
                                    dp={image.user.profile_image.small}
                                    hire={image.user.for_hire}
                            sponsorship={image.sponsorship} />
                            
                })}</div></>
            
              : ""
            }
           

          </div>
        </div>
      </InfiniteScroll>

    </div>
  );
};

// createRoot(document.getElementById('root')as HTMLElement).render(<Collage path={"photos/random"} query={null}/>)