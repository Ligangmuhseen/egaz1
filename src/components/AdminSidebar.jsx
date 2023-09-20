import React, { useState } from "react";
import {Link, Outlet} from "react-router-dom";
//import profile from "../images/profile.jpg";
//import images from "../images/images.jpeg";
import egaz from "../images/egaz.png";



function AdminSidebar() {


    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }   

    return(
        <div>

<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    
        <div className="logo-details">
            <img className="icon egazlogo" src={egaz} alt="img"/>
          
          <div className="logo_name">TSIMS EGAZ</div>
          <i className={`bx ${isSidebarOpen ? 'bx-menu' : 'bx-menu-alt-right'}`} id="btn"  onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/admin">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="info">
              <i className="bx bx-user"></i>
              <span className="links_name">Personal info</span>
            </Link>
            <span className="tooltip">Personal info</span>
          </li>
          <li>
            <Link to="usermanagement">
              <i className="bx bx-user"></i>
              <span className="links_name">User Management</span>
            </Link>
            <span className="tooltip">User Management</span>
          </li>
         
          <li>
            <Link to="trainingmng">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Training Management</span>
            </Link>
            <span className="tooltip">Training Management</span>
          </li>
          <li>
            <Link to="report">
              <i className="bx bx-folder"></i>
              <span className="links_name">Reports & Analysis</span>
            </Link>
            <span className="tooltip">Reports & Analysis</span>
          </li>
          <li>
            <Link to="payment">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Payment Management</span>
            </Link>
            <span className="tooltip">Payment Management</span>

          </li>
          <li>
            <Link to="feedback">
              <i className="bx bx-heart"></i>
              <span className="links_name">Feedback&Contacts</span>
            </Link>
            <span className="tooltip">Feedback</span>
          </li>
          <li>
            <Link to="certificates">
              <i className="bx bx-cog"></i>
              <span className="links_name">Certificates</span>
            </Link>
            <span className="tooltip">Certificates management</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src="" alt="profileImg" />
              <div className="name_job">
                <div className="name">Admin</div>
                <div className="job">System Administrator</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
           
        <div className="text trainingcontainer">Dashboard</div>
        
     
      <Outlet />
        
      

        
      </section>


        </div>



    );
}

export default AdminSidebar;