import { HomeOutlined , BulbOutlined ,FundOutlined , MenuOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'


function Navbar() {
  const [activemenu,setactivemenu]=useState(null);
  const [screensize,setscreensize]=useState(null);
  useEffect(()=>{
    const handleresize=()=>setscreensize(window.innerWidth);
    window.addEventListener('resize',handleresize);
    handleresize();
    return ()=>window.removeEventListener('resize',handleresize);
  },[]);
  useEffect(()=>{
    if(screensize<700){
      setactivemenu(false);
    }
    else{
      setactivemenu(true);
    }
  },[screensize]);
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
        <Link to="/">Cryptospace</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={()=>setactivemenu(!activemenu)}>
          <MenuOutlined/>
        </Button>
        {/* <Button className='menu-control-container'></Button> */}
      </div>
      {activemenu && (
        <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}
        >
          <Link to="/cryptocurrencies">CryptoCurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}
        >
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  )
}

export default Navbar
