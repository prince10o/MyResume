import React from "react";

class CartItem extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       price: 999,
  //       title: "phone",
  //       qty: 1,
  //     };
  //   }
  //   increaseQuantity = () => {
  //     // this.state.qty += 1;
  //     // console.log("this", this.state);
  //     // setstate form 1
  //     // this.setState({
  //     //   qty: this.state.qty + 1,
  //     // });
  //     // setstate form 2 - if previos state required use this
  //     this.setState((prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     });
  //   };

  //   decreaseQuantity = () => {
  //     console.log("this", this.state);
  //     this.setState((currState) => {
  //       const { qty } = this.state;
  //       if (qty == 0) {
  //         return;
  //       }
  //       return {
  //         qty: currState.qty - 1,
  //       };
  //     });
  //   };
  render() {
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQunatity, onDecreaseQunatity, onDeleteProduct } =
      this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25, color: "blue" }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3945/3945636.png"
              onClick={() => onIncreaseQunatity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/11781/11781688.png"
              onClick={() => onDecreaseQunatity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/5676/5676066.png"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
