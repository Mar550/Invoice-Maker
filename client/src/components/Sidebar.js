import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsPerson} from 'react-icons/bs';
import {MdOutlineSpaceDashboard} from 'react-icons/md';
import {BiStore} from 'react-icons/bi';
import {BsCreditCard2Back} from 'react-icons/bs';
import {BiBarChartSquare} from 'react-icons/bi';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {MdOutlineMail} from 'react-icons/md';
import {MdOutlineSettings} from 'react-icons/md';
import {FiPlusSquare} from 'react-icons/fi';
import {FiMinusSquare} from 'react-icons/fi';
import {BiLogOut} from 'react-icons/bi';
import {BiLineChart} from 'react-icons/bi';


const Sidebar = () => {


  return (
    <Wrapper>
    <div className="sidebar">
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo"> DASHBOARD </span>
      </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
        <div className="space1"> 
        <p className="title">MAIN</p>
        <li>
          <MdOutlineSpaceDashboard className="icon" />
          <span>Home </span>
        </li>
        <hr/>

        <p className="title">LISTS</p>
        <Link to="/income" style={{ textDecoration: "none" }}>
          <li>
            <FiPlusSquare className="icon" />
            <span> Incomes </span>
          </li>
        </Link>
        <Link to="/expense" style={{ textDecoration: "none" }}>
          <li>
            <FiMinusSquare className="icon" />
            <span> Expenses </span>
          </li>
        </Link>
        <li>
          <BiLineChart className="icon" />
          <span> Charts </span>
        </li>
        <hr/>
        <p className="title">USEFUL</p>
        <li>
          <BiBarChartSquare className="icon" />
          <span> Analytics</span>
        </li>
        <li>
          <BsPerson className="icon" />
          <span> Profile </span>
        </li>
        <li>
          <MdOutlineSettings className="icon" />
          <span> Settings </span>
        </li>
        </div>
        </ul>
        <div className="bottom">
        <ul>
          <li>
        <BiLogOut className="icon" />
          <span>Logout</span>
          </li>
        </ul>
        </div>
    </div>
    </div>
    </Wrapper>
    )
}


const Wrapper = styled.div`

body{
  width: 12rem;
}
.sidebar {
  width: 10rem;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
}
  
.top {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #3f51b5;
}

hr{
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
}

.center {
  padding-left: 10px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
      
.title {
  font-size: 10px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
}

li {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
}
  
li:hover {
  background-color: #ece8ff;
}

.icon {
  font-size: 19px;
  color: #3f51b5;
}

span{
  font-size: 14px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
}

.bottom{
  margin-top: 10rem;
  position:sticky;
}
`

export default Sidebar;
