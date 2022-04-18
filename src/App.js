import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer msg="Hola soy un ItemListContainer" />
    </div>
  );
}

export default App;
