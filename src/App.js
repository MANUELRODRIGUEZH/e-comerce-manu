
import './App.css';
import { NavBar } from  './components/NAvbar/Navbar' ;
import ItemListContainer from  './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar marca='Kabod Muebles'/>
      <ItemListContainer />
    </div>

  );
}

export default App;
