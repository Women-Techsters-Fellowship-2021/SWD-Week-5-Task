import React from 'react';

const SideBar = () => {
        return ( 
        <div> 
           
            <nav class="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
            <a class="navbar-brand" href="./dashboard"><img src="../img/logo.jpg" data-retina="true" alt="" width="200" height="43"/></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">                 
                 
                  <a  class="nav-link" href="./dashboard">
                    <span class="nav-link-text">Dashboard</span>
                  </a>
                </li>
                 <li class="nav-item" data-toggle="tooltip" data-placement="right" title="To Do">
                  <a class="nav-link"href="./todocart">           
                    <span class="nav-link-text">Add ToDo List</span>
                  </a>
                </li>                  
              </ul>
            
              <ul class="navbar-nav ml-auto">                  
                <li class="nav-item">
                  <a class="nav-link" data-toggle="modal" href="/Login" data-target="#exampleModal">
                    <i class="fa fa-fw fa-sign-out"></i>Logout</a>
                </li>
              </ul>
            </div>         
          </nav>    
        </div>
          )
        }

 
export default SideBar;