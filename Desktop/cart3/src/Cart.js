import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          id: 1,
        },
        {
          price: 9999,
          title: "phone",
          qty: 2,
          id: 2,
        },
        {
          price: 50000,
          title: "laptop",
          qty: 1,
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("Hey please increase the quantity of the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Hey please decrease the quantity of the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };

  handleDeleteproduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQunatity={this.handleIncreaseQuantity}
              onDecreaseQunatity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteproduct}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
