import React, { useState } from "react";
import { Link,Outlet} from "react-router-dom";
import egaz from "../images/egaz.png";
//import profile from "../images/profile.jpg";
//import "../css/style.css";



function TrainerSidebar() {


    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }   

    return(
        <div>

<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    
        <div class="logo-details">
        <img className="icon egazlogo" src={egaz} alt="img"/>
          <div class="logo_name">TSMS EGAZ</div>
          <i class={`bx ${isSidebarOpen ? 'bx-menu' : 'bx-menu-alt-right'}`} id="btn"  onClick={toggleSidebar}></i>
        </div>
        <ul class="nav-list">
         
          <li>
            <Link to="">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Home</span>
            </Link>
            <span class="tooltip">Home</span>
          </li>
          <li>
            <Link to="info">
              <i class="bx bx-user"></i>
              <span class="links_name">Personal info</span>
            </Link>
            <span class="tooltip">Personal info</span>
          </li>
          <li>
            <Link to="trainings">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Trainings</span>
            </Link>
            <span class="tooltip">Trainings</span>
          </li>
          <li>
            <Link to="materials">
              <i class="bx bx-folder"></i>
              <span class="links_name">Materials</span>
            </Link>
            <span class="tooltip">Materials</span>
          </li>
          
          <li>
            <Link to="feedback">
              <i class="bx bx-heart"></i>
              <span class="links_name">Feedback&Contacts</span>
            </Link>
            <span class="tooltip">Feedback</span>
          </li>
          <li>
            <Link to="attendance">
              <i class="bx bx-cog"></i>
              <span class="links_name">Attendance</span>
            </Link>
            <span class="tooltip">Attendance</span>
          </li>
          <li class="profile">
            <div class="profile-details">
              <img src="" alt="profileImg" />
              <div class="name_job">
                <div class="name">Muhsin Triple</div>
                <div class="job">Web designer</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <div class="text trainingcontainer">Dashboard</div>
        <h3 style={{marginLeft:"30px"}}>Available Trainings</h3>
        
        <Outlet />
  
      </section>


        </div>



    );
}

export default  TrainerSidebar;
