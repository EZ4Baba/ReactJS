import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dummyItems = [
    {
      id: "p1",
      title: "first product",
      price: 55,
      description: "this is first product",
    },
    {
      id: "p2",
      title: "second product",
      price: 110,
      description: "this is second product",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyItems.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
