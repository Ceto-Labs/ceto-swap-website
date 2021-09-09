import React, { useState } from 'react'
// import { HashRouter } from 'react-router-dom'
import { Layout, Row, Col, List, Avatar, Button, Form, Input } from 'antd'
// import { SmileOutlined } from '@ant-design/icons'
import { Actor, HttpAgent } from '@dfinity/agent'
import { idlFactory as StorageDIL } from './candid/storage.did'
import { STORAGE_EMAIL_CID } from './candid/id'
import './App.scss'
import TopHeader from './components/Header'
import Home from './pages/Home'

// import Logo from './assets/images/app_ico_01.png'
import Link01 from './assets/images/app_ico_02.png'
import Link02 from './assets/images/app_ico_03.png'
import Link03 from './assets/images/app_ico_04.png'

const { Content, Footer } = Layout

const App = (props) => {
  const [link] = useState([
    { icon: Link01, url: 'https://twitter.com/CetoSwap/' },
    { icon: Link02, url: 'https://cetoswap.medium.com/' },
    { icon: Link03, url: 'https://github.com/Ceto-Labs/' }
  ])
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollToAnchor = (anchorName) => {
    console.log(anchorName)
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName)
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }
  }
  // Actor
  const createActor = (canisterId) => {
    const agent = new HttpAgent({})

    // Fetch root key for certificate validation during development
    if (process.env.NODE_ENV === 'development') {
      agent.fetchRootKey().catch((err) => {
        console.warn('Unable to fetch root key. Check to ensure that your local replica is running')
        console.error(err)
      })
    }

    // Creates an actor with using the candid interface and the HttpAgent
    return Actor.createActor(StorageDIL, {
      agent,
      canisterId
    })
  }

  // Subscribe Email
  const handleSubscribeEmail = async () => {
    console.debug('handleSubscribeEmail: ', email, typeof email)
    setLoading(true)
    await createActor(STORAGE_EMAIL_CID)
      .addCetoMailSub(email)
      .then((res) => {
        console.log(res)
        if (res.ok) {
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }
  // change input value
  const handleOnChange = (str) => {
    setEmail(str.target.value)
  }

  return (
    <Layout className="layout">
      <TopHeader handleScrollTo={scrollToAnchor} />
      <Content className="site-layout">
        <div className="site-layout-background">
          <Home />
        </div>
      </Content>
      <Footer>
        <Row align="middle" justify="space-around" style={{ width: 1200 }}>
          <Col>
            <h3>Join our newsletter</h3>
            <Form layout="inline" size="large" onFinish={handleSubscribeEmail} autoComplete="off">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]}
              >
                <Input type="text" placeholder="Your email address" onChange={handleOnChange} />
              </Form.Item>
              <Form.Item>
                <Button type="default" htmlType="submit" loading={loading}>
                  Subscribe
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col>
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={link}
              renderItem={(item) => (
                <List.Item key={item}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Avatar shape="square" size={70} src={item.icon} />
                  </a>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default App
