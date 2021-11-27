import "./Basket.css";

const Basket = (props) => {
  const removeCartItem = (index, item) => {
    let currentCartItems = [...props.basket];
    currentCartItems.splice(index, 1);
    props.setBasket(currentCartItems);
    let currentCost = props.totalCost - Number(item.price);
    props.setTotalCost(currentCost);
  }

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {props.basket.map((item, index) => {
        return (
          <div className="shopping-cart">
            <img src={item.url} alt="" />
            <h4>{item.name}</h4>
            <p>£{item.price}</p>
            <button onClick={() => removeCartItem(index, item)}>delete</button>
          </div>
        )
      })}
      <h4>Total to pay: £{(props.totalCost).toFixed(2)}</h4>
    </div>
  )
}

export default Basket;