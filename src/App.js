import { HashRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserAccess from "./components/UserAccess";

function App() {
  return (
    <HashRouter>  
    <div className="App">
      <Routes>
        <Route path="/" element={<UserAccess />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/pokedex/:id" element={<PokemonDetail />}/>
        </Route>
      </Routes>
    </div>
    </HashRouter>

  );
}

export default App;
