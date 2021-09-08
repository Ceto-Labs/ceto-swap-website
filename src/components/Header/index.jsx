import React, { useState } from 'react'
import { Layout, Menu, Modal } from 'antd'
// import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const { Header } = Layout
const { Item } = Menu

const TopHeader = (props) => {
  const [nav] = useState(['Vision', 'Features', 'Architecture', 'About'])

  const ComingSoon = () => {
    Modal.info({
      icon: '',
      content: 'Coming Soon...',
      centered: true,
      className: 'connected-modal',
      width: 600,
      maskClosable: true
    })
  }

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        {nav.map((item, index) => (
          <Item onClick={() => props.handleScrollTo(item.toLocaleLowerCase())} key={index + 1}>
            {item}
          </Item>
        ))}
        <Item key="6" onClick={ComingSoon}>
          {/* <a href="https://hl7gt-bqaaa-aaaah-aadea-cai.ic0.app/" target="_blank" rel="noopener noreferrer">
            Connected
          </a> */}
          <span>Connected</span>
        </Item>
      </Menu>
      <div className="right-space"></div>
    </Header>
  )
}

export default TopHeader
