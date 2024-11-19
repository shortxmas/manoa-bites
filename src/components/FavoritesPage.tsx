import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import RestaurantCard from './RestaurantCard';

const FavoritesPage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  // Retrieve the logged-in user's email.
  const ownerEmail = session?.user?.email || '';

  // Fetch the restaurants favorited by the logged-in user.
  const favorites = await prisma.favorites.findMany({
    where: {
      user: {
        email: ownerEmail,
      },
    },
    include: {
      restaurant: {
        include: {
          favoritedBy: true, // Include favoritedBy details in the response.
        },
      },
    },
  });

  const restaurants = favorites.map((favorite) => favorite.restaurant);

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Favorite Restaurants</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {restaurants.map((restaurant) => ( // Renamed argument to avoid conflict
                  <Col key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default FavoritesPage;
