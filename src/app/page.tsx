import { Container, Image } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className=" justify-content-center py-3">
      <Image src="FullLogo.png" fluid style={{ height: '500px' }} />
    </Container>
  </main>
);

export default Home;
