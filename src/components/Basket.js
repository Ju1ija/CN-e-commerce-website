const Basket = (props) => {
  const removeCartItem = (index, item) => {
    let currentCartItems = [...props.basket];
    currentCartItems.splice(index, 1);
    props.setBasket(currentCartItems);
    let currentCost = props.totalCost - Number(item.price);
    props.setTotalCost(currentCost);
  }

  return (
    <div>
      <h2>My Cart</h2>
      {props.basket.map((item, index) => {
        return (
          <div className="shopping-cart">
            <img src={item.url} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => removeCartItem(index, item)}>delete</button>
          </div>
        )
      })}
      <p>Total to pay: £{props.totalCost}</p>
    </div>
  )
}

export default Basket;