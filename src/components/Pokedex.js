import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)
    const [pokemonSearched, setPokemonSearched] = useState("");
    const [pokemons, setPokemons] = useState([]); 
    const [ types, setTypes] = useState([])

    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
        .then(res=> setPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
        .then(res=> setTypes(res.data.results));

    },[])
    
    

    const search = () => {
        
        navigate(`/pokedex/${pokemonSearched}`)
    }
    const pokemonFiltered = e=>{
        
        axios.get(e.target.value)
        .then(res=> setPokemons(res.data.pokemon))
    }
    
    const[page, setPage] = useState(1);

    const pokemonNumber = 10;
    const lastIndex = pokemonNumber*page;
    const firstIndex = lastIndex-pokemonNumber;
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)
    const lastPage = Math.ceil(pokemons.length/pokemonNumber)
    const NumberPages = []
    for (let i=1; i<= lastPage; i++){
    NumberPages.push(i)}
    

    console.log(pokemonPaginated)

    return (
        <div>
            <h2>Pokedex</h2>
            <h3>Welcome {userName}!</h3>
            <select onChange={pokemonFiltered}>
                <option>Todos los pokemones</option>
                {
                    types.map(type => (
                        <option value={type.url} key={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className='search-box'>
                <input 
                    type="text" 
                    value={pokemonSearched} 
                    onChange={e => setPokemonSearched(e.target.value)}
                    placeholder="ingresa ID o nombre de tu pokemon"
                />
                <button onClick={search}><b>Buscar</b></button>
            </div>
            <div className='container-card'>
            {
                pokemonPaginated.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} 
                        pokemonUrl = {pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                    />
                ))
            }
            </div>
            <button className='prev-next-buttons'
            onClick={()=> setPage(page-1)}
            disabled={page===1}
            >
               <b>prev</b> 
            </button>
            {
                NumberPages.map(number => (
                    <button className='button-pages' key={number} onClick={() => setPage(number)}>{number}</button>
                ))
            }
            <button className='prev-next-buttons'
            onClick={()=> setPage(page+1)}
            disabled={page===lastPage}
            >
               <b>next</b> 
            </button>
        </div>
    );
};

export default Pokedex;