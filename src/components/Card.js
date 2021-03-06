import { useState } from "react";
import "./Card.css";

function Card(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="card" key={props.index}>
      {moreInfo ? <ContactInfo item={props.item} onClickEvent={() => setMoreInfo(false)} /> : <Picture item={props.item} onClickEvent={() => setMoreInfo(true)} addToBasket={() => props.basketHandler(props.item)} />}
    </div>
  )
}

const Picture = (props) => {
  return (
    <>
      <img src={props.item.url} alt="" />
      <h3>{props.item.name}</h3>
      <h4>£{props.item.price}</h4>
      <p onClick={props.onClickEvent} className="more-info">more info</p>
      <button onClick={props.addToBasket}>add to basket</button>
    </>
  )
}

const ContactInfo = (props) => {
  return (
    <>
      <h3>{props.item.name}</h3>
      <h4>£{props.item.price}</h4>
      <p>Current owner: {props.item.owner}</p>
      <p>City: {props.item.address}</p>
      <p>Phone: {props.item.contactDetails}</p>
      <button onClick={props.onClickEvent}>back</button>
    </>
  )
}

export default Card;