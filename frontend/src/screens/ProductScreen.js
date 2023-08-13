import "./ProductScreen.css" 
import { useState, useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons" 

import { getProductById } from "../redux/actions/productsActions" 
import { addToCart } from "../redux/actions/cartActions" 

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1) 
  const dispatch = useDispatch() 

  const productDetails = useSelector((state) => state.getProductById) 
  const { loading, error, product } = productDetails 

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductById(match.params.id)) 
    }
  }, [dispatch, match, product]) 

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty)) 
    history.push(`/carrinho`) 
  } 

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Carregando produto...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productScreenLeft">
            <div className="imageLeft">
              <img src={product.imageUrl} alt={product.name} width={500}/>
            </div>
            <div className="infoLeft">
              <p className="nameLeft">{product.name}</p>
              <p><b>Preço:</b> R$ {product.price}</p>
              <p><b>Descriçao:</b> {product.description}</p>
              <p>
                Status:
                {product.stock > 0 ? "Item disponível" : "Item esgotado :("}
              </p>
              <p>
                Quantidade: 
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button className="addBtn" type="button" onClick={addToCartHandler}>
                <FontAwesomeIcon icon={faCartShopping} className="carrinhoIcon" /> Adicionar ao carrinho 
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  ) 
} 

export default ProductScreen 
