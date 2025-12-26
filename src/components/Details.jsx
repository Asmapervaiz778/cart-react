import React, { Component } from "react";
import { ProductConsumer } from "../ContextData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const product = value.detailProduct;

          if (!product) {
            return <div className="text-center mt-5">Loading product details...</div>;
          }

          const { id, name, price, description, image, inCart } = product;

          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h2>{name}</h2>
                  <h4>PKR {price}</h4>
                  <p>{description}</p>

                  <div className="mb-2">
                    <Link to="/" className="btn btn-link">
                      Back to Products
                    </Link>
                  </div>

                  <Button
                    size="sm"
                    disabled={inCart}
                    onClick={() => value.addToCart(id)}
                    variant="secondary"
                  >
                    {inCart === true?(<span>In Cart</span>) : (<span>Add to Cart</span>)}
                  </Button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
