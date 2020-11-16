import React from 'react'
import { NavLink } from 'react-router-dom'

function Navv(){
    return(
        <>
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-sm bg-light Small shadow">
  
              <a class="navbar-brand" href="#">
                <img src="images/logo.png" alt="logo"  style={{width:'50px', 
                height:'50px'}}/>
              </a>
              <ul className="navbar-nav mr-auto" style={{fontSize:'17px'}}>
                <li className="nav-item"   >
                  {/* <a href="" class="nav-link">Home</a> */}
                <NavLink exact activeClassName="active_class" className="nav-link float-right" to="/" style={{color:'black'}} >Home</NavLink>
                </li>&nbsp;
                <li className="nav-item">
                <NavLink exact activeClassName="active_class" className="nav-link" to="/ourwork" style={{color:'black'}} >Our Work</NavLink>
                </li>&nbsp;
                <li className="nav-item">
                <NavLink exact activeClassName="active_class" className="nav-link" to="/contact" style={{color:'black'}} >Contact us</NavLink>
                </li>&nbsp;
                <li className="nav-item" >
                <NavLink exact activeClassName="active_class" className="nav-link" to="/servies" style={{color:'black'}} >About us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </>
    )
}
export default Navv;