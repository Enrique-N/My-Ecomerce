import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { ItemsProvider } from './ItemContext';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <ItemsProvider>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={ItemListContainer} />
              <Route path="/detail/:id" component={ItemDetailContainer} />
              <Route path="/cart" />
            </Switch>
          </div>
        </Router>
      </ItemsProvider>
    </CartProvider>
  );
}

export default App;
