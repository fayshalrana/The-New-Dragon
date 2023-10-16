import React from 'react'
import Header from '../Pages/Sheard/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import RightNav from '../Pages/Sheard/RightNav/RightNav'
import Footer from '../Pages/Sheard/Footer/Footer'
import { Outlet } from 'react-router-dom'

const CategoryLayout = () => {
  return (
    <div>
      <Header></Header>
        <Container>
      <Row>
        <Col lg={9}>
            <Outlet></Outlet>
        </Col>
        <Col lg={3}>
            <RightNav>
                
            </RightNav>
        </Col>
      </Row>
    </Container>
        <Footer></Footer>
    </div>
  )
}

export default CategoryLayout
