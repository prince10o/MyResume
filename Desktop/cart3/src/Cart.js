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
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}
export default Cart;
