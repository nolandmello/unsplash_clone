import React, { Component } from 'react';
import './App.css';
import Navigation from './component/navbar/navbar';//get navbar
// import { Home } from './component/home/home';
import { Banner } from './component/home/banner';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Nav2 } from './component/navbar2/navbar2';
import { Following } from './component/following/following';
import { Advertise } from './component/advertise/advertise';
import { Home } from './component/home/home';
import { SearchFind } from './component/searchResult/searchFind';
import { SearchNav } from './component/searchResult/searchNav';
import { Collection } from './component/CollectionsAndUsers/collections';


//navbar context 
const home = {
  unsplash: { name: "home", to: "/" },
  links: [
    { name: "Explore", to: "/explore" },
    { name: "Advertise", to: "/advertise" },
    { name: "blog", to: "/blog/" },
  ]
}

const blog = {
  unsplash: { name: "blog", to: "/blog/" },
  links: [
    { name: "Home", to: "/blog/" },
    { name: "Announcements", to: "/blog/announcement" },
    { name: "Product", to: "/blog/product" },
    { name: "Brands", to: "/blog/brands" },
    { name: "Partnerships", to: "/blog/partnerships" },
    { name: "Community", to: "/blog/community" },
  ]
}


const Temp=()=>{
  return (
  <>
  <h1>temp</h1>
  
  <Outlet/></>
  )
}

const Foll=()=>{
  return(
<>
<Nav2/>
<h1>temp</h1>
</>

  )
}


function App() {
 

  return (


<>
    <Routes>

      <Route path='/' element={<Navigation unsplash={home.unsplash} links={home.links} />}>
          <Route index element={<Home path={"photos/random"}/>}/>
          <Route path='explore' element={<Temp/>}/>
          <Route  path='advertise' element={<Advertise/>}/>
          <Route path='following' element={<Following/>}/>
          <Route path='t/:filter' element={<Home path={"search/photos"} />}/>
          <Route path='s' element={<SearchNav/>}>
            <Route path="photos/:items" element={<SearchFind/>}/>
            <Route path="collections/:items" element={<Collection/>}/>
            <Route path="users/:items" />
            </Route>     
      </Route>
      <Route path='/blog/' element={<Navigation unsplash={blog.unsplash} links={blog.links} />}>
      <Route path='announcement' element={<Temp/>}/>
      </Route>
    </Routes >

    
  </>
   
  
   
  );
}

 
export default App;
