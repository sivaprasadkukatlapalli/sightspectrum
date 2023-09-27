import React from 'react'
//import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { DefaultButton, Stack } from '@fluentui/react';
import logo from '../asset/ats.PNG'; 
import dashboardpic from '../asset/dashboard.jpeg'
import { Box } from '@mui/material';
import './dashboarder.css';




 function Dashboardboard() {
  return (
    <>
    <div className='bg-container'>
        <header>
            <div className='header-container'>
            <img src={logo}  className='img'/>
            <p className='dashboard1'>dashboard</p>
            </div>
        </header>
        <nav>
            <div className='nav-contaier'>
            <ul className='list'>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>dashboard</a> </li>
          <li className='li'><a href='#' className='ref'><img  className="imga" src={dashboardpic}/>BDE Dashboard</a></li>
          <li className='li' ><a href='#' className='ref'><img  className="imga" src={dashboardpic}/>target</a></li> 
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>Demand</a></li>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>Submission Report</a></li>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>candidate Library</a></li>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>Employee</a></li>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>MasterList</a></li>
          <li className='li'> <a href='#' className='ref'> <img  className="imga" src={dashboardpic}/>Reports</a></li>
          <li className='li'> <a href='#' className='ref'><img  className="imga" src={dashboardpic}/>portal</a> </li>
           </ul>
            </div>

        </nav>
    </div>
        </>
  )
}
export default Dashboardboard;
