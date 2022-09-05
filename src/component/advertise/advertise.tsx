import React from "react";
import Button from "../button/buttonComponent";
import { Card } from "../card/card";
import { Features } from "../features/features";
import { Logo } from "../logos/logos";
import { FeatureContainer, Section1, Cover, CoverSec, SideImg, DirectAds, CenterImg, Centeritems } from "./advertiseStyle";


const features ={
    f:[ {title:"Download",
         img:"https://unsplash-assets.imgix.net/marketing/vertise/direct-download.svg?auto=format&fit=crop&q=60",
         text:"Associate your brand with user’s positive emotion of finding the perfect photo for their creation."
            },
        { title:"Feed",
          img:"https://unsplash-assets.imgix.net/marketing/vertise/direct-feed.svg?auto=format&fit=crop&q=60",
          text:"Reach creative professionals when they’re most focused on finding the perfect image." 
        },
        { title:"Homepage",
        img:"https://unsplash-assets.imgix.net/marketing/vertise/direct-homepage.svg?auto=format&fit=crop&q=60",
        text:"Taking over the homepage increases your brand’s relevance with the entirety of Unsplash’s audience."
      },
      { title:"Video",
      img:"https://unsplash-assets.imgix.net/marketing/vertise/direct-video.svg?auto=format&fit=crop&q=60",
      text:"Use eye-grabbing videos to give users a better understanding of your brand’s value-add."
    }
    ]
}


export const Advertise=()=>
{



    return(
        <main style={{display:"flex", flexDirection:"column"}} >
            <Section1>
                <Cover>
                    <CoverSec style={{justifyContent:"center" }}>
                        <div>
                            <h1 style={{fontSize:"46px"}}>Advertise on Unsplash</h1>
                            <p>The world’s most popular creative platform.</p>

                            {/* component-> */}<Button children="Get in touch with us" onClick={function (): void {
                                throw new Error("Function not implemented.");} }/>       
                        </div>
                    </CoverSec>


                    <CoverSec style={{justifyContent:"space-around"}}>
                        <SideImg src="https://unsplash-assets.imgix.net/marketing/vertise/header.png?auto=format&fit=crop&q=60"/>
                    </CoverSec>
                </Cover>


                <Centeritems>
                    <p>Join the world’s biggest brands that we’re proud to call partners</p>
                    <ul>
                        {/* component-> */}<Logo/> 
                    </ul>

                    <h1>Direct Advertising</h1>
                    <DirectAds> 
                        Direct ads are performance-driven placements. 
                        Built to generate traffic for brands and convert on customer acquisition KPIs. 
                        We create maximum impact with the following four paid placement opportunities
                    </DirectAds>
                    <CenterImg src="https://unsplash-assets.imgix.net/marketing/vertise/direct.png?auto=format&fit=crop&q=60"/>
         
                    <FeatureContainer>
                        {/* component-> */}<Features corner="5px" color="white" feature={features.f} />
                    </FeatureContainer>
                </Centeritems>


                <Centeritems style={{height: "44px", marginBottom:"50px" }}> 
                    {/* component-> */}<Button children="Get in touch with us" onClick={function (): void {
                        throw new Error("Function not implemented.");}}/>
                </Centeritems>
    
            </Section1>



            <Centeritems>
                <h1>Native Advertising</h1>
                <p style={{width:"45vw", textAlign:"center"}}>
                    Generate brand lift unseen on any other platform. It works simply by sharing your brand’s beautiful content on Unsplash in targeted search results. And in exchange, creators of the internet share your content with their audiences — in relevant trusted places.
                    </p>
            </Centeritems>
       
        </main>
)}