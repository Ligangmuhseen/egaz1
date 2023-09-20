import React ,{useState} from "react";
import { Link,Outlet} from "react-router-dom";
import egaz from "../images/egaz.png";

function DivisionManagerSidebar() {

  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }  


    return(
        <div>

<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    
    <div className="logo-details">
    <img className="icon egazlogo" src={egaz} alt="img"/>
      <div className="logo_name">TSMS EGAZ</div>
      <i className={`bx ${isSidebarOpen ? 'bx-menu' : 'bx-menu-alt-right'}`} id="btn"  onClick={toggleSidebar}></i>
    </div>
    <ul className="nav-list">
      <li>


            <Link to="">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </Link>
            <span class="tooltip">Dashboard</span>
          </li>
          <li>
            <Link to="inbox">
              <i class="bx bx-user"></i>
              <span class="links_name">User</span>
            </Link>
            <span class="tooltip">User</span>
          </li>
          <li>
            <Link to="certificates">
              <i class="bx bx-chat"></i>
              <span class="links_name">Certificates</span>
            </Link>
            <span class="tooltip">Certificates</span>
          </li>
          <li>
            <Link to="trainings">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Trainings</span>
            </Link>
            <span class="tooltip">Trainings</span>
          </li>
         
          <li class="profile">
            <div class="profile-details">
              <img src="profile.jpg" alt="profileImg" />
              <div class="name_job">
                <div class="name">Prem Shahi</div>
                <div class="job">Web designer</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <div class="text">Dashboard</div>
        <Outlet />
      
      </section>
  







        </div>



    );
}

export default DivisionManagerSidebar;