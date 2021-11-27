import "./Basket.css";
import continueShopping from "../continueShopping.jpeg";

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
      {props.basket.length === 0 ? <BasketEmpty /> : (
        <>
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
        </>
      )}
      <h4>Total to pay: £{(props.totalCost).toFixed(2)}</h4>
    </div>
  )
}

const BasketEmpty = () => {
  return (
    <>
      <h4>Uh oh! Your basket is empty, lets find a furry friend to add!</h4>
      <img src={continueShopping} alt="" />
    </>
  )
}

export default Basket;