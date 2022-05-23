import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting={"Hola soy Dico!"}></ItemListContainer>
    </div>
  );
}

export default App;
