import React, { useState } from 'react'
import { Layout, Menu, Modal, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
// import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './index.scss'

const { Header } = Layout
const { Item } = Menu

const TopHeader = (props) => {
  const [nav] = useState(['Vision', 'Features', 'Architecture', 'About'])
  const [visible, setVisible] = useState(false)

  const onOpen = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

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
    <>
      <Header className="head-fixed">
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
        <div className="right-space">
          <MenuOutlined onClick={onOpen} />
        </div>
      </Header>
      <Drawer className="custom-ant-drawer" placement="right" onClose={onClose} visible={visible}>
        <Menu mode="vertical" defaultSelectedKeys={['1']}>
          {nav.map((item, index) => (
            <Item onClick={() => props.handleScrollTo(item.toLocaleLowerCase())} key={index + 1}>
              {item}
            </Item>
          ))}
          <Item key="6" onClick={ComingSoon}>
            <span>Connected</span>
          </Item>
        </Menu>
      </Drawer>
    </>
  )
}

export default TopHeader
