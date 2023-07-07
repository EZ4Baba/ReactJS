import { useState } from "react";
import "./checkout.css";

function CheckoutForm() {
  const [enteredName, setEnteredName] = useState("");
  const [NameTouched, setNameTouched] = useState(false);

  const [enteredAddress, setEnteredAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState(false);

  const [pinCode, setPinCode] = useState("");
  const [pinTouched, setPinTouched] = useState(false);

  const nameIsValid = enteredName.length > 3;
  const nameIsInvalid = !nameIsValid && NameTouched;

  const addressIsValid = enteredAddress.includes("@");
  const addressIsInvalid = !addressIsValid && addressTouched;

  const pinIsValid = pinCode.length === 6;
  const pinIsInvalid = !pinIsValid && pinTouched;

  function nameValue(e) {
    setEnteredName(e.target.value);
  }
  function nameBlur() {
    setNameTouched(true);
  }
  function addressValue(e) {
    setEnteredAddress(e.target.value);
  }
  function addressBlur() {
    setAddressTouched(true);
  }
  function pinValue(e) {
    setPinCode(e.target.value);
  }
  function pinBlur() {
    setPinTouched(true);
  }
  const formIsValid = nameIsValid && addressIsValid && pinIsValid;
  const [formValidity, setFormValidity] = useState("");
  function formHandler(e) {
    e.preventDefault();
    console.log("formisValid =", formIsValid);

    if (!formIsValid) {
      console.log("form is not valid");
      setFormValidity(<p>Please fill the form Correctly</p>);
      return;
    }
    setEnteredAddress("");
    setEnteredName("");
    setPinCode("");
    setNameTouched(false);
    setAddressTouched(false);
    setPinTouched(false);
    console.log("order is on your way");
  }
  return (
    <form onSubmit={formHandler}>
      <div className="control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameValue}
          onBlur={nameBlur}
          value={enteredName}
        />
      </div>
      {nameIsInvalid && <p> Please enter valid name</p>}
      <div className="control">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={addressValue}
          onBlur={addressBlur}
          value={enteredAddress}
        />
      </div>

      {addressIsInvalid && <p> Please enter valid Address</p>}
      <div className="control">
        <label htmlFor="pin">Postal Code</label>
        <input
          type="number"
          id="pin"
          onChange={pinValue}
          onBlur={pinBlur}
          value={pinCode}
        />
      </div>

      {pinIsInvalid && <p> Please enter valid Postal Code</p>}

      {formValidity}
      <div className="actions">
        <button>Confirm</button>
      </div>
    </form>
  );
}
export default CheckoutForm;
