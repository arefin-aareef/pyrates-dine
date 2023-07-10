/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Container } from "react-bootstrap";
import bannerImg from "../../assets/chef-banner.jpg";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src={bannerImg}
        alt="Card image"
        className="opacity-50"
        style={{ height: "560px" }}
      />
      <Card.ImgOverlay className="rounded-0">
        <Card.Title className="text-center mt-5 pt-5" style={{fontSize: '4rem'}}>
          Welcome to <span className="text-info fw-bold">Pyrates Dine</span>{" "}
        </Card.Title>
        <Container>
          <Card.Text className="text-center p-4 fs-1 fst-italic my-5">
          <Marquee>
            Experience authentic Italian cuisine made with the freshest ingredients at our welcoming restaurant. from classic pasta dishes to wood-fired pizzas, indulge in the rich and flavorful tastes of Italy. 
          </Marquee>
          </Card.Text>
      </Container>
        <Card.Text className="text-center text-info fs-4">Explore Our Chef's & Recipes</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Banner;
