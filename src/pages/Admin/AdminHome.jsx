import React from "react";
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchBar from "../../others/Searchbar";
import "../../css/admin.css";
import MailBadge from "../../others/MailBadge";



function AdminHome() {
    return (

        <div>
            <div className="searchbar">
                <SearchBar />
            </div>
            <span className="mailbadge">
            <MailBadge />
            </span>
            



            Home


        </div>


    );
}


export default AdminHome;