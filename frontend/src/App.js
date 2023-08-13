import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/produto/:id' component={ProductScreen}/>
          <Route exact path='/carrinho' component={CartScreen}/>
      </main>
    </Router>
  );
}

export default App;
