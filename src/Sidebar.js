import './Sidebar.css'; // You can create a separate CSS file for styling
import {Link,Route,Routes,useNavigate} from 'react-router-dom';
import React from 'react';
import { IconName } from "react-icons";
import {Menu} from "antd";
import {
  HomeOutlined,
  CommentOutlined,
  UserOutlined,
  IdcardOutlined,
  ContactsOutlined,
  PoweroffOutlined,
  DiffOutlined,
}from "@ant-design/icons/lib/icons";


const Sidebar = () => {
  const navigate=useNavigate();
  /*return (
    <div className="sidebar">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/bookanappointment">Book An Appointment</Link></li>
      </ul>
    </nav>
    
    </div>
  );*/
  return(
    <div className="sidebar">
      <Menu
      onClick={({key})=>{
        if(key=="signout"){
          //Todo signout feature
        }
        else{
          navigate(key);
        }


      }}
        items={[
          {label:"Home",key:"/",icon:<HomeOutlined />},
          {label:"About",key:"/about",icon:<CommentOutlined />},
          {label:"Login",key:"/login",icon:<UserOutlined />},
          // {label:"Book An Appointment",key:"/bookanappointment",icon:<IdcardOutlined />},
          {label:"Book An Appointment",key:"/doctors",icon:<IdcardOutlined />},
          // {label:"Appointment Info",key:"/appointmentinfo",icon:<DiffOutlined />},
          {label:"Your Appointments",key:"/yourappointment",icon:<IdcardOutlined />},
          {label:"Contact",key:"/contact",icon:<ContactsOutlined />},
          {label:"Signout",key:'signout',icon:<PoweroffOutlined />,danger:true},
        ]}
      ></Menu>
    </div>
  )
};

//export default Navigation;


export default Sidebar;
