/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowRight, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefContainer = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://pyrates-dine-arefin-aareef.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3 className="fs-2 text-center text-info my-5">Meet Our World Class Chefs</h3>
      <div>
        {chefs.map((chef) => (
          <div key={chef.id}>
            <Row className="g-4">
              <Col>
                <Card className="mb-3">
                  <div className="d-flex align-items-center">
                    <Card.Img
                      className="w-50"
                      variant="top"
                      src={chef.chef_picture}
                    />

                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                      <h4>Name: {chef.chef_name}</h4>
                      <p>Experience: {chef.years_of_experience} Years</p>
                      <p> Total Recipes: {chef.num_of_recipes}</p>
                      <p> <FaRegThumbsUp /> {chef.likes} </p>
                    <Link to={`/eachchef/${chef.id}`}>
                      <Button variant="info">View Recipes <FaArrowRight /> </Button>
                    </Link>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefContainer;
