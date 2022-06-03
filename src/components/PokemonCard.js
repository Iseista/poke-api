import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const navigate = useNavigate();

    const [pokemon, setPokemon]= useState({})

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res=> setPokemon(res.data))

    },[])

    console.log(pokemon)

    
    return (
        <div className='pokemon-card' onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="pokemon" />
            
        </div>
    );
};

export default PokemonCard;