'use client'; // must be a Client Component

import Link from 'next/link';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className='error-section d-flex align-items-center justify-content-center'>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        {/* <h1>404</h1> */}
                        {/* <h2 className='primary-text'>Page Not Found</h2> */}
                        <p className='text-gray'>Something went wrong!</p>
                        {/* <Link href="/" className='nav-link'>
                            Goto Home Page
                        </Link> */}
                    </Col>
                </Row>
            </Container>
        </div>
  );
}
