import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {GiCoins} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='gradient-bg-footer pt-5'>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={3}><h2 style={{color:'#fff', fontSize: '31px'}}><GiCoins/> Alypto</h2></Col>
          <Col sm={12} md={4} lg={3}>
            <p className="text-white fw-bolder fs-5">Destinations</p>
            <div className="footer_links">
              <p>Africa</p>
              <p>Antartica</p>
              <p>Asia</p>
              <p>America</p>
              <p>Europe</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <p className="text-white fw-bolder fs-5">Interests</p>
            <div className="footer_links">
              <p>Adventure Travel</p>
              <p>Art And Culture</p>
              <p>Wildlife And Nature</p>
              <p>Family Holidays</p>
              <p>Food And Drinks</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <p className="text-white fw-bolder fs-5">Shop</p>
            <div className="footer_links">
              <p>Destination Guides</p>
              <p>Pictorial & Gifts</p>
              <p>Special offers</p>
              <p>Delivery Times</p>
              <p>FAQs</p>
            </div>
          </Col>
        </Row>
        <hr/>
        <h2 style={{fontSize:'18px',fontWeight:300, color:'#c4c2c2', textAlign:'center', margin:'0', padding: '0 0 17px 0'}}>©{new Date().getFullYear()} Alypto. All rights reserved.</h2>
      </Container>
    </div>
  )
}

export default Footer