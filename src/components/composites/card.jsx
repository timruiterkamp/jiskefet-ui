import React from "react";
import Button from "react-bootstrap/Button";

export default function CardSingle(props) {
  return (
    <article className="card">
      <header className="card-header">
        <h3>{props.item * 3}23</h3>
        <div className="button-holder">
          <Button variant="info">Comment</Button>
          <Button variant="warning" className="ml-1">
            Human
          </Button>
        </div>
      </header>
      <main>
        <div className="card-extra">
          <div>
            Authors: <span>12</span>
          </div>
          <div>
            Creation time: <span>22:24:20</span> 30/07/2019
          </div>
        </div>
        <p>
          Faucibus orci luctus et ultrices posuere cubilia curae donec pharetra
          magna vestibulum aliquet ultrices erat
        </p>
        <div className="card-tags">
          <Button variant="outline-light">Tag one</Button>
          <Button variant="outline-light" className="ml-1">
            Tag two
          </Button>
        </div>
      </main>
    </article>
  );
}
