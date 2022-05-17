import { useState , useEffect } from "react";
import PokeCard from "./components/PokeCard";
import axios from "axios";

function App() {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.
  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState("")


  // Passo 3c
  useEffect(() => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        console.log(res.data)
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

  },[])


  // Passo 3a
  const changePokeName = (event) => {
    setPokeName(event.target.value)
    // Passo 3d

  };

  // Passo 3e
  const pokeOptions = pokemons.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}

      </option>

    );
  });

  // Passo 4a
  const pokemon = true && <PokeCard pokeName={pokeName} />;

  return (
    <div>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </div>
  );
}

export default App;
