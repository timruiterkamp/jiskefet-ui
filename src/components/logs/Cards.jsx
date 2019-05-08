import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

export default function CardsTable() {
  return (
    <CardColumns>
      <Card>
        <Card.Body>
          <Card.Title>ID: 144</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <b>22:24:20</b> 30/07/2013
          </Card.Subtitle>
          <Card.Text>
            faucibus orci luctus et ultrices posuere cubilia curae donec
            pharetra magna vestibulum aliquet ultrices erat
          </Card.Text>

          <Button variant="secondary" className="mr-1">
            Comment
          </Button>
          <Button variant="secondary">Human</Button>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}
