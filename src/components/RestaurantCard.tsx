import { Restaurant } from '@prisma/client';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const ContactCard = ({ restaurant }: { restaurant: Restaurant & { favoritedBy: User[] } }) => {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;

  // Check if the restaurant is favorited by the current user
  const isFavorited = restaurant.favoritedBy.some((user) => user.email === currentUserEmail);

  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title>
          {restaurant.name}
        </Card.Title>
        <Card.Subtitle>{restaurant.website}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Phone:
            {restaurant.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="restaurant.menuLink" target="_blank" rel="noopener noreferrer">Menu</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="restaurant.onlineOrderLink" target="_blank" rel="noopener noreferrer">Order Online</a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">
          <i className={`bi bi-suit-heart${isFavorited ? '-fill' : ''}`} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ContactCard;
