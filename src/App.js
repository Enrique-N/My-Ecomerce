import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/detail/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
