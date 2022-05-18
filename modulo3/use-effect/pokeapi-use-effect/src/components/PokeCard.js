import axios from "axios";
import { useEffect, useState } from "react"

export default function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.

  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };


  // Passo 4c
  useEffect (() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
      .then((res) => {
        console.log(res)
        setPokemon( res.data );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.pokeName])

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      {pokemon.weight &&<p>Peso: {pokemon.weight} Kilos</p>}
      {/* Passo 4d */}
      {pokemon.types &&<p>Tipo: {pokemon.types && pokemon.types[0].type.name }</p>}
      {/* Passo 4d */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  )
}
