import React from 'react';

import Footer from '../navbar/Footer';
import SideBar from '../navbar/SideBar';


function Dashboard()  {
  

return (
          
        <div>   
             <div class="content-wrapper">
            <div class="container-fluid">
            <SideBar />     
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                <a href="./dashboard">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">My Dashboard</li>
            </ol>
           <div class="row">
              <div class="col-xl-4 col-sm-6 mb-3">
                <div class="card dashboard text-white bg-primary o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fa fa-fw fa-envelope-open"></i>
                    </div>
                    <div class="mr-5"><h5>26 Users!</h5></div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="messages.html">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6 mb-3">
                <div class="card dashboard text-white bg-warning o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fa fa-fw fa-star"></i>
                    </div>
                      <div class="mr-5"><h5>11 ToDo</h5></div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="reviews.html">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6 mb-3">
                <div class="card dashboard text-white bg-success o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fa fa-fw fa-calendar-check-o"></i>
                    </div>
                    <div class="mr-5"><h5>10 Completed!</h5></div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="bookings.html">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>             
              </div>  
              <Footer />     
              </div>
              </div> </div>
        )

}
 
export default Dashboard;