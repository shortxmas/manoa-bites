'use client';

import { Button, Card, ListGroup } from 'react-bootstrap';
import { Restaurant } from '@/lib/validationSchemas';

/* Renders a single card with Restaurant Informtation. See list/page.tsx. */
const ContactCard = ({ restaurant }: { restaurant: Restaurant }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>
        {restaurant.name}
      </Card.Title>
      <Card.Subtitle>{restaurant.website}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <ListGroup variant="flush">
        {restaurant.phone}
        {restaurant.menuLink}
        {restaurant.onlineOrderLink}
      </ListGroup>
    </Card.Body>
    <Card.Footer>
      <Button variant="secondary"><i className="bi bi-suit-heart" /></Button>
    </Card.Footer>
  </Card>
);

export default ContactCard;
