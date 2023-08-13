import "./HomeScreen.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts as listProducts } from "../redux/actions/productsActions"

import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getAllProducts = useSelector((state) => state.getAllProducts)
  const { products, loading, error } = getAllProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="homescreen">
      <br></br>
      <h2 className="title">Últimos produtos</h2>
      <div className="products">
      {loading ? (
          <h2>Carregando produtos...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            )))
          }
      </div>
    </div>
  );
};

export default HomeScreen