import React from "react";
import { Card } from "react-bootstrap";
import "./MaterialCard.css";

const MaterialCard = ({ name, description, image }) => {
  return (
    <Card className="material-card">
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={image} alt={''}  />
      <Card.Body>
       
        <Card.Text className="cdt">{description}</Card.Text>
       
      </Card.Body>
    </Card>
  );
};

export default MaterialCard;
