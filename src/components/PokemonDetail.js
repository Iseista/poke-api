import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const {id} = useParams();
    const [pokemon, setPokemon]=useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    },[])

    console.log(pokemon)

       
    return (
        <div className='pokemon-detail'>
            
            <img className='img-title' src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon-500x313.png" alt="" />
            
            <div className='detail-body'>
                 <img className='img-pokemon' src={pokemon.sprites?.other?.home?.front_default} alt="pokemon" />
                 <div className='info-pokemon'>
                 <h3>{pokemon.name}</h3>
                 <p><b># </b>{pokemon.id}</p>
                 <p><b>Weight: </b>{pokemon.weight}</p>
                 <p><b>Height: </b>{pokemon.height}</p>
                 </div>
            </div>
        </div>
    );
};

export default PokemonDetail;