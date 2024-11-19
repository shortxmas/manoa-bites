import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import { addFavorite } from '@/lib/dbActions';

const onSubmit = async (data: { userId: number; restaurantId: number }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addFavorite(data.userId, data.restaurantId);
  swal('Success', 'Your item has been favorited', 'success', {
    timer: 2000,
  });
};

const FavoritesPage: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddStuffSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }


const FavoritesPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const favorites = await prisma.favorites.findMany({
    where: {
      owner,
    },
  });
  console.log(favorites);
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">List Contacts</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {favorites.map((favorites) => (
                  <Col key={restaurant.name}>
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
