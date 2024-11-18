import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
<<<<<<< Updated upstream
      <Col className="text-center">
        Department of Information and Computer Sciences
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        <br />
        <a href="http://ics-software-engineering.github.io/nextjs-application-template">Template Home Page</a>
=======
      <Col className="justify-content-end">
        <h3>Resource Links:</h3>
        <p>FAQ</p>
        <p>About Us</p>
        <p><a href="/issueform">Report a problem</a></p>
        <p><a href="https://github.com/manoa-bites">Link to our source code</a></p>
>>>>>>> Stashed changes
      </Col>
    </Container>
  </footer>
);

export default Footer;
