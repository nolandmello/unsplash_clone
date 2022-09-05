import React, { useState } from 'react';
import {Navbar,Logo, Ul, Li1} from './navbarstyle';
import styled from 'styled-components';
import Button from '../button/buttonComponent';
import { Search } from '../search/search component';
import { NavLinks } from '../navLinks';
import { Nav2 } from '../navbar2/navbar2';
import {Menu}  from '../sideBar/SideBar.comp'
import ClickAwayListener from 'react-click-away-listener';
import { ReactComponent as Options } from '../assets/menu.svg';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SearchNav } from '../searchResult/searchNav';




export const Navigation = (props: {
    unsplash: { name: string; to: string };
    links:  Array<{ name: string; to: string }>
  }) => 
{
    const { unsplash, links } = props;  // unsplash is for the logo gets used here links sent foward to navlinks 
    const path= useLocation().pathname; 
    let { items}= useParams();


    
 const [popup, setPopup] = useState(false)

    const handleClickAwayEvent = () => {
        setPopup(false);
      };
      
      const handleClickEvent = () => {
        setPopup((prev) => !prev);
      };

return(
       <>{console.log({item:{items}} )}
        <Navbar>
          <Ul>
            <Link to={unsplash.to}>
              <Logo src="https://cdn-icons-png.flaticon.com/512/5968/5968743.png" />
            </Link>
                      
            {unsplash.name=="home" 
              ? <><div style={{flexGrow:"1"}}>
                  <Search style="50px" className="nvSearch"/>
                  </div>
                  <NavLinks links={links} />

                  <ClickAwayListener onClickAway={handleClickAwayEvent}>
                    <div >
                      {/* <Options onClick={handleClickEvent}/> */}
                      <button onClick={handleClickEvent}>menu</button>
                      
                      {popup && <Menu />}
                    </div>
                  </ClickAwayListener>
                 
                </>
              :
                <>
                  <Ul>
                    <NavLinks links={links} />
                  </Ul>
                  <Link to="/" style={{position:"relative", 
                                       top:"0",right:"0",padding:"10px",
                                       color: "black",textDecoration: "none"}}>
                      unsplash.com
                  </Link>
                </>
              } 


            </Ul>
                {!items && path != "/advertise" && <Nav2/> }
          </Navbar>
          <Outlet/>
</>)

                  

}

export default Navigation;