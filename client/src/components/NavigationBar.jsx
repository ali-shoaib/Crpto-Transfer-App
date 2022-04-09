import React, {useState} from 'react'
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap'
import {GiCoins} from 'react-icons/gi'

const NavigationBar = () => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Modal
          size="md"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
      >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              About
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>App:</b> A web 3.0 crypto transaction app developed using react, solidity and smart contracts.</p>
            <br/>
            <p><b>Developer:</b> Ali Shoaib</p>
          </Modal.Body>
      </Modal>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{color:'#fff', fontSize: '31px'}}><GiCoins/> Alypto</Navbar.Brand>
          <Navbar.Toggle style={{background:'#fff', borderColor:'#fff'}} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Button onClick={() => setSmShow(true)} style={{background:'transparent', borderColor:'#02837b'}}>About App & Dev</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
