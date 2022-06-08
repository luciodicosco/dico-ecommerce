import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='./ItemListContainer' element={<ItemListContainer greeting={"Hola soy Dico!"}></ItemListContainer>}/>
        <Route path='./category/:id' element={<ItemListContainer></ItemListContainer>}/>
        <Route path='./item/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
