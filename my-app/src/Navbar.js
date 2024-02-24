import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">首页</a></li>
        <li><a href="/about">关于我们</a></li>
        <li><a href="/services">服务</a></li>
        <li><a href="/contact">联系方式</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;