/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { FaRegHeart, FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert';

function showAlert() {
  Swal({
    title: "Success!",
    text: "Your Recipe Has Been Added To Favorites",
    icon: "success",
    button: "OK",
  });
}


const EachChef = () => {
  const { id } = useParams();
  const EachChef = useLoaderData();
  const {
    chef_name,
    chef_picture,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_description,
    recipes
  } = EachChef;

  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    showAlert();
    setButtonClicked(true);
  }

  

  return (
    <Container>
      <Card className="mb-3">
        <div className="d-flex flex-column align-items-center">
          <Card.Img className="w-50" variant="top" src={chef_picture} />

          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <h4>Name: {chef_name}</h4>
            <p>{chef_description}</p>
            <p>Experience: {years_of_experience} Years</p>
            <p> Total Recipes: {num_of_recipes}</p>
            <p><FaRegThumbsUp /> {likes}</p>
          </Card.Body>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Recipe 1</Accordion.Header>
            <Accordion.Body>
              <p>Recipe Name: {recipes[0].recipe_name}</p>
              <p>Ingredients: {recipes[0].ingredients.map(i => <li key={id}> {i} </li>)}</p>
              <p>Cooking Method: {recipes[0].cooking_method}</p>
              <p>Ratings: {recipes[0].rating}</p>
              <Button onClick={handleClick} disabled={buttonClicked}>Add To Favorite  <FaRegHeart /></Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Recipe 2</Accordion.Header>
            <Accordion.Body>
              <p>Recipe Name: {recipes[1].recipe_name}</p>
              <p>Ingredients: {recipes[1].ingredients.map(i => <li key={id}> {i} </li>)}</p>
              <p>Cooking Method: {recipes[1].cooking_method}</p>
              <p>Ratings: {recipes[1].rating}</p>
              <Button onClick={handleClick} disabled={buttonClicked}>Add To Favorite  <FaRegHeart /> </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Recipe 3</Accordion.Header>
            <Accordion.Body>
              <p>Recipe Name: {recipes[2].recipe_name}</p>
              <p>Ingredients: {recipes[2].ingredients.map(i => <li key={id}> {i} </li>)}</p>
              <p>Cooking Method: {recipes[2].cooking_method}</p>
              <p>Ratings: {recipes[2].rating}</p>
              <Button onClick={handleClick} disabled={buttonClicked}>Add To Favorite  <FaRegHeart /> </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
};

export default EachChef;
