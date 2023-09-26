import React from 'react'
//import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { DefaultButton, Stack } from '@fluentui/react';
import logo from '../asset/ats.PNG'; 
import { Box } from '@mui/material';
import './dashboarder.css';




 function Dashboardboard() {
  return (
    <>
    <div className='bg-container'>
        <header>
        <div className='left-container'>
            <img src={logo}  className='img'/>
    
        </div>
        </header>
        
        <div className='right-container'>
            <p className='heading3'>Dashboard</p>
        </div>
        <nav>
        <div className='left-container1'>
            <ul className="heading1">
          <li> <a href='#' className='ref'><p>dashboard</p></a> </li>
          <li><a href='#' className='ref'>BDE Dashboard</a></li>
          <li><a href='#' className='ref'>target</a></li> 
          <li> <a href='#' className='ref'>Demand</a></li>
          <li> <a href='#' className='ref'>Submission Report</a></li>
          <li> <a href='#' className='ref'>candidate Library</a></li>
          <li> <a href='#' className='ref'>Employee</a></li>
          <li> <a href='#' className='ref'>MasterList</a></li>
          <li> <a href='#' className='ref'> Reports</a></li>
          <li> <a href='#' className='ref'>portal</a> </li>
           </ul>
        </div>
        </nav>
        <section>
        <div className='right-container1'>
            <p> this is the ats program 
            </p>
            <p>this is secind page</p>
        </div>
        </section>
    </div>
    </>
  )
}
export default Dashboardboard;
