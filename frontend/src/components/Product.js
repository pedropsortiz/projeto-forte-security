import './Product.css'
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="info">
        <p className="name">{name}</p>

        <p className="description">{description.substring(0, 100)}...</p>

        <p className="price">R$ {price}</p>

        <Link to={`/produto/${productId}`} className="infobtn">
          Ver produto em detalhes
        </Link>
      </div>
    </div>
  );
};
export default Product