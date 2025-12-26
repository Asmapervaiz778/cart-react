import React, { Component } from "react";
import { appProducts, ProdInDetails } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: appProducts,
    detailProduct: ProdInDetails,
    cart: [],
  };

 
  getItem = (id) => {
    return this.state.product.find(item => item.id === id);
  };


  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };


  addToCart = (id) => {
    let tempProducts = [...this.state.product];
    const index = tempProducts.findIndex(item => item.id === id);
    const product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState({
      product: tempProducts,
      cart: [...this.state.cart, product],
    });
  };


  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    selectedItem.count += 1;
    selectedItem.total = selectedItem.count * selectedItem.price;

    this.setState({ cart: tempCart });
  };

  
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    selectedItem.count -= 1;

    if (selectedItem.count === 0) {
      this.removeItem(id);
    } else {
      selectedItem.total = selectedItem.count * selectedItem.price;
      this.setState({ cart: tempCart });
    }
  };

 
  removeItem = (id) => {
    let tempProducts = [...this.state.product];
    let tempCart = this.state.cart.filter(item => item.id !== id);

    const index = tempProducts.findIndex(item => item.id === id);
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState({
      cart: tempCart,
      product: tempProducts,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
