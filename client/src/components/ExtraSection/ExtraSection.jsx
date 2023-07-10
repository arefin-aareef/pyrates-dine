/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import extraImg from '../../assets/extra.jpg'

const ExtraSection = () => {
    return (
        <Card className='mb-3'>
        <Card.Img variant="top" src={extraImg} />
        <Card.Body>
          <Card.Text className='fs-5'>
          Explore our collection of traditional and modern Italian recipes, from homemade pasta to mouth-watering tiramisu.
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default ExtraSection;