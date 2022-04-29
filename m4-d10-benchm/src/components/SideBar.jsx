import React from 'react'
import { ImBooks } from "react-icons/im"
import { BsSearch } from "react-icons/bs"
import { HiOutlineHome } from "react-icons/hi"
import { Link } from "react-router-dom";
import classes from "./SideBar.module.css"

export default function SideBar() {
  return (
    <div className="sidebar__wrap">
    <div className="top-part">
      <Link to={"/"}>
        <img  className={classes.logo} src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-250x150.jpg"  alt="sidebar-logo" />
      </Link>
      <div className='menu__single selected__menu'>
        <HiOutlineHome className='menu__item' /> Home
      </div>
      <div className='menu__single'>
        <BsSearch className='menu__item' /> Search
      </div>
      <div className='menu__single'>
        <ImBooks className='menu__item' /> Books
      </div>
    </div>
    <div className="bottom-part">
      <button className='signup__btn btn'>Sign up</button>
      <button className='login__btn btn'>Login</button>
    </div>
  </div>
  )
}
