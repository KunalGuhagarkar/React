import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleDeliveryChange(e) {
    setDelivery(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instructions"
      />
      <p>Address: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Gpay">Gpay</option>
        <option value="Cash">Cash</option>
        <option value="Debit">Debit Card</option>
        <option value="Credit">Credit Card</option>
      </select>
      <p>Payment Method: {payment}</p>
      <p>Delivery Type</p>
      Pick Up:
      <input
        type="radio"
        name="Delivery"
        value="Pick Up Delivery"
        checked= {delivery === "Pick Up Delivery"}
        onChange={handleDeliveryChange}
      />
      <br />
      Regular:
      <input
        type="radio"
        name="Delivery"
        value="Regular Delivery"
        checked= {delivery === "Regular Delivery"}
        onChange={handleDeliveryChange}
      />
      <br />
      Drop:
      <input
        type="radio"
        name="Delivery"
        value="Drop Delivery"
        checked= {delivery === "Drop Delivery"}
        onChange={handleDeliveryChange}
      />
      <p>Delivery Type: {delivery}</p>
    </>
  );
}

export default MyComponent;
