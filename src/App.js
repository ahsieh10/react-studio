import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryItem, BakeryCart} from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addItem = (event) => {
    //TODO: add later
    var found = false;
    var foundIndex = 0;
    var targetName = event.target.getAttribute('item');
    var targetPrice = event.target.getAttribute('price');
    for(var i = 0; i < cart.length; i++){
      if(cart[i].name == targetName){
        found = true;
        foundIndex = i;
      }
    }
    console.log(found)
    if(found){
      cart[foundIndex].count = cart[foundIndex].count + 1;
    } else {
      const newItem = {
        name: targetName,
        count: 1,
      }
      cart.push(newItem);
    }
    setTotal(total + parseFloat(targetPrice));
    setCart(cart);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} state={addItem}/>
      ))}

      <div>
        <h2>Cart</h2>
        <BakeryCart cart={cart} total={total}/>
      </div>
    </div>
  );
}

export default App;
