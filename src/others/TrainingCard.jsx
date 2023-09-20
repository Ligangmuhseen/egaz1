import React from "react";
import "../css/trainingcard.css";
import { Link } from "react-router-dom";
import blockchain from "../images/blockchain.jpeg";


function Trainingcard() {
    return(
        <div className="singletrainingcard">

<div class="card snipcss-cFUh9 style-lalZt" id="style-lalZt">
  <img class="card-img-top" src={blockchain} alt=""/>
  <div class="card-body">
    <h5 class="card-title">
      Training 1
    </h5>
    <p class="card-text">
      This Training is aiming in improving the knowledge together providing the skills and also further more enhancing the mind set.
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      Active
    </li>
    <li class="list-group-item">
      FREE OR PAID
    </li>
   
  </ul>
  <div class="card-body">
    <Link to="" className="card-link">
      Enroll
    </Link>
    <a class="card-link" href="#">
      Go Training Resources
    </a>
  </div>
</div>



        </div>
    );
}

export default Trainingcard;