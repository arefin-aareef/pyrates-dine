/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from '../../assets/pizza.jpg'
import pic2 from '../../assets/spaghetti.jpg'
import pic3 from '../../assets/tiramisu.jpg'

const ExtraSection2 = () => {
  return (
    <div className="mb-3">
        <h3 className="mt-4 mb-3 text-center">Choose From Our Favorites</h3>
      <Carousel>
        <Carousel.Item className="h-50">
          <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-info fw-bold">Margherita Pizza</h3>
            <p>A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-info fw-bold">Spaghetti Carbonara</h3>
            <p>A simple yet delicious pasta dish made with spaghetti, eggs, pancetta or bacon, parmesan cheese, and black pepper.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-info fw-bold">Tiramisu</h3>
            <p>
            An iconic Italian dessert made with layers of coffee-soaked ladyfingers and a creamy mascarpone filling, topped with cocoa powder.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ExtraSection2;
