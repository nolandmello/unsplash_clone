import React from "react";
import { Groups } from "./groups";

const g1 = {
    set1: [
      { scale:"0.745326", delay:"-1.62952s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-constantcontact.svg?auto=format&fit=crop&q=60" },
      { scale:"0.801796", delay:"-2.68602s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-creativemarket.svg?auto=format&fit=crop&q=60" },
      {scale:"0.916157", delay:"-4.59173s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-iconosquare.svg?auto=format&fit=crop&q=60" },
      {scale:"0.970131", delay:"-5.15351s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-skillshare.svg?auto=format&fit=crop&q=60" },
      {scale:"0.966824", delay:"-2.33678s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-grammarly.svg?auto=format&fit=crop&q=60" },
      {scale:"0.609294", delay:"-6.99781s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-printful.svg?auto=format&fit=crop&q=60" },
      {scale:"0.793979", delay:"-4.18656s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-bluehost.svg?auto=format&fit=crop&q=60" },
      {scale:"0.945258", delay:"-1.77461s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-buzzfeed.svg?auto=format&fit=crop&q=60" },
      {scale:"0.695349", delay:"-4.85402s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-brandox.svg?auto=format&fit=crop&q=60" },
      {scale:"0.660143", delay:"-1.38775s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-fiverr.svg?auto=format&fit=crop&q=60" },
      {scale:"0.981744", delay:"-7.94678s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-envato.svg?auto=format&fit=crop&q=60" },
    ],
    set2: [
        {scale:"0.745326", delay:"-1.20285s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-hotjar.svg?auto=format&fit=crop&q=60" },
        {scale:"0.801796", delay:"-7.63489s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-meetup.svg?auto=format&fit=crop&q=60" },
        {scale:"0.916157", delay:"-1.62952s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-123rf.svg?auto=format&fit=crop&q=60" },
        {scale:"0.970131", delay:"-2.68602s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-imgix.svg?auto=format&fit=crop&q=60" },
        {scale:"0.966824", delay:"-4.59173s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-pitch.svg?auto=format&fit=crop&q=60" },
        {scale:"0.609294", delay:"-5.15351s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-canva.svg?auto=format&fit=crop&q=60" },
        {scale:"0.793979", delay:"-2.33678s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-msft.svg?auto=format&fit=crop&q=60" },
        {scale:"0.945258", delay:"-6.99781s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-loom.svg?auto=format&fit=crop&q=60" },
        {scale:"0.695349", delay:"-4.18656s", to: "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-moo.svg?auto=format&fit=crop&q=60" },
      ]
  }

export const Logo=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"55px"}}>
          <Groups group={g1.set1} duration="130s" direction="alternate-reverse"/>
          <Groups group={g1.set2} duration="115s" direction="alternate"/>

        </div>
    )
}