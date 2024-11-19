import { Container, Image } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Image src="manoabiteslogo.jpg" fluid style={{ height: '500px' }}/>
      <h2>Welcome To Manoa Bites</h2>
    </Container>
  </main>
);

export default Home;
