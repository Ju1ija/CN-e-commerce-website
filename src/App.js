import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './App.css';
import Card from "./components/Card";
import Basket from "./components/Basket";
import sausageDog from "./sausageDog.png";
const faker = require('faker');

function App() {
  const [open, setOpen] = useState(false);
  const [basket, setBasket] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState({
    error: false,
    message: "",
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random/12");
      const dataReceived = await response.json();
      setData(dataReceived.message.map(item => ({
        url: item,
        name: faker.name.firstName(),
        price: faker.commerce.price(),
        owner: faker.name.findName(),
        address: faker.address.city(),
        contactDetails: faker.phone.phoneNumberFormat()
      })));
      // setTimeout(function () {
      //   setLoading(false);
      // }, 1000);
    } catch (err) {
      setErrorState({ error: true, message: err.message });
    }
  }

  const basketHandler = (item) => {
    setBasket([...basket, item]);
    let currentCost = totalCost + Number(item.price);
    setTotalCost(currentCost);
  }

  return (
    <div>
      <div className="title">
        <img src={sausageDog} alt="" />
        <h1>title</h1>
        <div className="basket" onClick={onOpenModal}>
          <p>{basket.length}</p>
          <i class="bi bi-cart2"></i>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <Basket basket={basket} setBasket={setBasket} totalCost={totalCost} setTotalCost={setTotalCost} />
        </Modal>
      </div>
      <div className="dogs-on-sale">
        {data.map((item, index) => {
          return <Card item={item} index={index} basketHandler={basketHandler} />
        })}
      </div>
    </div >
  )
}

export default App;