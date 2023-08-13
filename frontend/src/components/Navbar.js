import { Link } from 'react-router-dom'  
import './Navbar.css'  
import { useSelector } from "react-redux"  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"  
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"  

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart)  
  const { cartItems } = cart  

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)  
  }  
  return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/"><h2>TechNexus Informática</h2></Link>
        </div>
        <ul className="links">
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/carrinho" className="carrinhoLink">
            <FontAwesomeIcon icon={faCartShopping} className="carrinhoIcon" />
            <span>
              Carrinho (<span>{getCartCount()}</span>)
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar