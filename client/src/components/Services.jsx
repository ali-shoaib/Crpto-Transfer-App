import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="d-flex align-items-center justify-content-center white-glassmorphism p-3 m-2 servicecard" style={{transition: '0.2s ease-in-out'}}>
    <div style={{width:'100px', height:'40px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50px', backgroundColor:color, margin: '0 23px 0 0'}}>
      {icon}
    </div>
    <div className="ml-5">
      <h4 className="mt-2 text-white text-lg">{title}</h4>
      <p className="mt-1 text-white text-sm">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className='gradient-bg-services pt-5 pb-3'>
      <Container>
        <h2 className='text-gradient text-center mb-4'>Services that we
          <br/>
          continue to improve
        </h2>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <ServiceCard
              color="#2952E3"
              title="Security gurantee"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <ServiceCard
              color="#8945F8"
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <ServiceCard
              color="#F84550"
              title="Fastest transactions"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services