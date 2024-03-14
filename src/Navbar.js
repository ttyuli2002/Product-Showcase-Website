import React from 'react';
import './Navbar.css'; 
import logo from './Assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><img src={logo} /></a>
      <ul className="nav-links">
        <li><a class="active" href="/"><i class="fa fa-fw fa-home"></i>首页</a></li>
        <li><a href="/about"><i class="fa fa-fw fa-search"></i>关于我们</a></li>
        <li><a href="/services"><i class="fa fa-fw fa-envelope"></i>服务</a></li>
        <li><a href="/contact"><i class="fa fa-fw fa-user"></i>联系方式</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;