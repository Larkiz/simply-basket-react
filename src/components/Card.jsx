import { useContext } from "react";
import { cartContext } from "../utils/Context";

export const Card = ({ product }) => {
  let { basket, addProduct } = useContext(cartContext);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>{product.price} рублей</h4>
      {basket.findIndex((item) => item.id == product.id) < 0 ? (
        <button onClick={() => addProduct(product)}>В корзину</button>
      ) : (
        <p>В корзине</p>
      )}
    </div>
  );
};
