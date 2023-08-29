import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartStore";

const Products = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: 1,
        title: "test",
        price: 6,
      })
    );
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          addToCart={addToCartHandler}
        />
      </ul>
    </section>
  );
};

export default Products;
