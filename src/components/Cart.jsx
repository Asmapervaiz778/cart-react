import React, { Component } from "react";
import { ProductConsumer } from "../ContextData";
import { Link } from "react-router-dom";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    return (
      <section className="container mt-5">
        <ProductConsumer>
          {(value) => {
            if (value.cart.length === 0) {
              return (
                <>
                  <h3 className="text-center">Your Cart is Empty</h3>
                  <div className="text-center mt-3">
                    <Link to="/" className="btn btn-primary">
                      Back to Products
                    </Link>
                  </div>
                </>
              );
            }

           
            const totalItems = value.cart.reduce((sum, item) => sum + item.count, 0);
            const totalPrice = value.cart.reduce((sum, item) => sum + item.total, 0);

            return (
              <>
                
                <div className="container mb-4 p-3 border rounded bg-light">
                  <h4 className="mb-2">Cart Summary</h4>
                  <div className="d-flex justify-content-between">
                    <span>Total Products: {totalItems}</span>
                    <span>Total Value: PKr.{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <h1 className="text-center mb-4">Your Cart</h1>

            
                <div className="row text-center fw-bold border-bottom pb-2">
                  <div className="col-lg-2">Product</div>
                  <div className="col-lg-2">Name</div>
                  <div className="col-lg-2">Price</div>
                  <div className="col-lg-2">Quantity</div>
                  <div className="col-lg-2">Remove</div>
                  <div className="col-lg-2">Total</div>
                </div>

                
                {value.cart.map(item => (
                  <div
                    key={item.id}
                    className="row text-center align-items-center py-3 border-bottom"
                  >
                    <div className="col-lg-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        style={{ width: "80px" }}
                      />
                    </div>

                    <div className="col-lg-2">{item.name}</div>
                    <div className="col-lg-2">Pkr.{item.price}</div>

                    <div className="col-lg-2">
                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => value.decrement(item.id)}
                      >
                        -
                      </button>

                      <span className="mx-2">{item.count}</span>

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => value.increment(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <div className="col-lg-2">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => value.removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="col-lg-2">PKr.{item.total}</div>
                  </div>
                ))}
              </>
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
