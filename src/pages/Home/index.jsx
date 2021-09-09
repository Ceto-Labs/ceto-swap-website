import React, { useState } from 'react'
import { Row, Col, Image } from 'antd'
import './index.scss'

import font001 from '../../assets/images/fonts/cetoswap.png'
import font002 from '../../assets/images/fonts/feature.png'
import font003 from '../../assets/images/fonts/more.png'
import Vision01 from '../../assets/images/btc_ico.png'
import About01 from '../../assets/images/about01.png'
import About02 from '../../assets/images/about02.png'
import About03 from '../../assets/images/about03.png'
import Feature01 from '../../assets/images/feature01.png'
import MoreModule from '../../assets/images/more01.png'
import RoadMap from '../../assets/images/roadmap.svg'

const Home = (props) => {
  const [cardData] = useState([
    {
      title: 'Internet Computer',
      imgSrc: About01,
      desc: 'It is designed to enable the public Internet to host high-speed running smart contracts without being limited by carrying capacity, so that it can host a wider range of systems and services.'
    },
    {
      title: 'Canister',
      imgSrc: About02,
      desc: 'As an upgrade to smart contracts, Canisters are computational units of Internet computers t designed for trillions of applications and services.'
    },
    {
      title: 'Motoko',
      imgSrc: About03,
      desc: 'Based on the Wasm language, a programming language developed to realize the safe and easy-to-use features of Internet Computer.'
    }
  ])

  return (
    <div className="home-container">
      <div id="vision" className="page-module vision">
        <div className="icon-left"></div>
        <div className="content">
          <Row>
            <Col span={18}>
              <h1>
                {/* CetoSwap is a fungible and
                <br /> non-fungible asset management
                <br /> platform */}
                <Image src={font001} preview={false} />
              </h1>
              <p>
                CetoSwap is a decentralized tokenized asset management platform, <br /> committed to establishing a link
                between DeFi and CeFi， <br />
                improving the liquidity of tokenized asset.
              </p>
            </Col>
            <Col span={6}>
              <Image preview={false} src={Vision01} className="rotate-dfinity" />
            </Col>
          </Row>
        </div>
      </div>
      <div id="features" className="page-module features bg">
        <div className="content">
          <Row justify="space-between" align="middle">
            <Col span={12}>
              <p className="title">Fast Easy-to-use</p>
              {/* <h2>What are the features?</h2> */}
              <h2>
                <Image src={font002} preview={false} />
              </h2>
              <ul className="list">
                <li>
                  <b>Create Token:</b> help create a new type pf token on the Dfinity Canister
                </li>
                <li>
                  <b>Swap:</b> Make dDecentralized exchanges can be launched, including but not limited to Dfinity
                </li>
                <li>
                  <b>Liquidity pool:</b> support liquidity mining and get rewards
                </li>
              </ul>
            </Col>
            <Col span={11} offset={1}>
              <Image src={Feature01} preview={false} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="page-module features features-more">
        <div className="content">
          <Row gutter={64} align="middle" style={{ marginTop: 100 }}>
            <Col span={12} push={12}>
              <p className="title">More than fast</p>
              {/* <h2>More to come...</h2> */}
              <h2>
                <Image src={font003} preview={false} />
              </h2>
              <ul className="list">
                <li>
                  <b>Create standardized token:</b> There is no standardized token on Dfinity. CetoSwap will propose a
                  standard to support the generation of more generalized tokens.
                </li>
                <li>
                  <b>DeFi products:</b> support more products for token asset management, which may include lending,
                  staking mining, etc.
                </li>
              </ul>
            </Col>
            <Col span={12} pull={12}>
              <Image src={MoreModule} preview={false} />
            </Col>
          </Row>
        </div>
      </div>
      <div id="architecture" className="page-module architecture">
        <div className="content">
          <p className="title">Safe, fully decentralized</p>
          <h2>Architecture</h2>
          <div className="txt-container">
            <ul className="list">
              <li>The features are provided by the Pair Canister, as a fully decentralized operation</li>
              <li>
                Support the decentralized exchange and creation of WICP, WCycle, WBTC, WETH and other standard tokens
              </li>
              <li>Support any third party to create trading pairs with privileges to upload the trading pairs</li>
            </ul>
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
        </div>
      </div>
      <div id="about" className="page-module about">
        <div className="content">
          <div className="road-map">
            <Image src={RoadMap} alt="road map" />
          </div>
          <div className="list-box">
            {cardData &&
              cardData.map((item, index) => {
                const { imgSrc, title, desc } = item
                return (
                  <div className="item" key={index}>
                    <div className="img">
                      <img src={imgSrc} width="60" alt="" />
                    </div>
                    <p className="title">{title}</p>
                    <p className="desc">{desc}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
