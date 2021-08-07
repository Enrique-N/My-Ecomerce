import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola Coder" />
    </div>
  );
}

export default App;
