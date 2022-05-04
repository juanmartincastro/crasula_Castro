import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ProductDetail from './components/ProductDetail';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/contador' element={<ItemCount />} />
          <Route path='/planta/:plantaId' element={<ProductDetail />} />
          <Route></Route>
        </Routes>
      </BrowserRouter>

      {/* <ItemListContainer 
      message='ItemListContainer' 
      /> */}
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
