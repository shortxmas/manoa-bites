import { Button, Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col>
          <h3>MANOA BITES:</h3>
          <p>
            This application is designed to help students and staff at the University of Hawaii at Manoa
            easily find food options across campus locations.
          </p>
        </Col>
        <Col className="justify-content-end">
          <h3>Links:</h3>
          <ul>
            <li><a href="foo">FAQ</a></li>
            <li><a href="/issuesform">Report a Problem</a></li>
            <li><a href="https://github.com/manoa-bites/manoa-bites">Link to our GitHub repo</a></li>
          </ul>
          <Container className="my-4">
            <hr className="mb-4" />
            {' '}
            {/* Horizontal line */}
            <Row className="justify-content-center align-items-center text-center">
              <Col xs="auto">
                <span className="me-3">Register for free</span>
              </Col>
              <Col xs="auto">
                <Button variant="outline-light" className="rounded-pill" href="/signup">
                  Sign up!
                </Button>
              </Col>
            </Row>
            <hr className="mt-4" />
            {' '}
            {/* Optional horizontal line after the section */}
          </Container>

        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
