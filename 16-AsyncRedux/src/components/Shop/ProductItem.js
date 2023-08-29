import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cart-slice";

//while using addToCart2 function

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    let product = { id: id, title: title, quantity: 1, price: price };
    dispatch(cartAction.addToCart(product));
  };
  /*
    if we want async code(ie: a http request to backend) we can put it here in component itself
    we have to transform our data here in component because we are using simple backend which will just store the data as it is ,then send it to backend then store & change state via redux
    but then in cart-reducer we will not transfrom(check existing cart-slice) 
  */
  // let cartItems = useSelector((state) => {
  //   return state.cartReducer.cartItems;
  // });

  // const cart = useSelector((state) => state.cartReducer);

  //Note: we cant manipulate any cart properties outside of reducer as it is only read only property
  // const addToCart2 = () => {
  //   // we will create new cart here add replace previous one with it using redux dispacth

  //   const newCartItems = cart.cartItems.slice(); // to create new copy to avoid mutation
  //   let product = { id: id, title: title, quantity: 1, price: price };
  //   const existingItem = newCartItems.find((itm) => {
  //     return product.id === itm.id;
  //   });
  //   if (!existingItem) {
  //     newCartItems.push(product);
  //   } else {
  //     let updatedItem = { ...existingItem };
  //     updatedItem.quantity++;
  //     let index = newCartItems.findIndex((itm) => {
  //       return itm.id === product.id;
  //     });
  //     newCartItems[index] = updatedItem;
  //   }
  //   let toReplaceCart = {
  //     cartItems: newCartItems,
  //     quantity: 2,
  //   };
  //   dispatch(cartAction.replcaeCart(toReplaceCart));
  //   //then http request
  // };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
          {/* <button onClick={addToCart2}>Add to Cart - 2</button> */}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
