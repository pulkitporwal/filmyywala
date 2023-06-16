import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <Link to={"/"}><div className="left">filmyywala</div></Link>
        <ul className="right">
            <li><a href="#">Top Trending</a></li>
            <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li><button>👑 Premium</button></li>
        </ul>
    </div>
  )
}

export default Header