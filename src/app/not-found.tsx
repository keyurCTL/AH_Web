import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
    return (
        <div className='not-found-section d-flex align-items-center justify-content-center'>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h1>404</h1>
                        <h2 className='primary-text'>Page Not Found</h2>
                        <p className='text-gray'>Sorry, the page you are looking for could not be found.</p>
                        <Link href="/" className='nav-link'>
                            Goto Home Page
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NotFound