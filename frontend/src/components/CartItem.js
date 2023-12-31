import "../components/CartItem.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"  
import { faTrash } from "@fortawesome/free-solid-svg-icons"  

const cartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={item.imageUrl} alt={item.name} width={200}/>
      </div>
      <Link to={`/product/${item.product}`} className="cartItemName">
        <p>{item.name}</p>
      </Link>
      <p className="cartItemPrice">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItemSelect"
      >
        {[...Array(item.stock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItemDeleteBtn"
        onClick={() => removeHandler(item.product)}
      >
      <span><FontAwesomeIcon icon={faTrash} className="carrinhoIcon" /></span>
      </button>
    </div>
  );
};

export default cartItem;