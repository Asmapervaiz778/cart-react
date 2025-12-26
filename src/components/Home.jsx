import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { ProductConsumer } from "../ContextData";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className="product-grid">
            {value.product.map((item) => {
              const { id, name, price, description, image, inCart } = item;
              return (
                <div key={id} className="product-card">
                  <Card onClick={() => value.handleDetail(id)}>
                    <Link to="/details">
                      <Card.Img
                        variant="top"
                        src={image}
                        loading="lazy"
                        className="product-image"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <small>Pkr {price}</small>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        size="sm"
                        disabled={inCart}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent Card click
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? "In Cart" : "Add to Cart"}
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
