import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div class="logo">
        <a href="/"><img src="./Assets/logo.png" /></a>
      </div>
      <ul className="nav-links">
        <li><a class="active" href="/"><i class="fa fa-fw fa-home"></i>首页</a></li>
        <li><a href="/about"><i class="fa fa-fw fa-search"></i>关于我们</a></li>
        <li><a href="/services"><i class="fa fa-fw fa-envelope"></i>服务</a></li>
        <li><a href="/contact"><i class="fa fa-fw fa-user"></i>联系方式</a></li>
      </ul>
      <div class="lang_area">
        <a class="cn" lang="zh-cn">简体</a>                                                  
        <i class="sep">|</i>                                              
        <a class="en" lang="en-us">English</a>                              
      </div>
    </nav>
  );
}

export default Navbar;