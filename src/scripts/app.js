const pokemContainer = document.querySelector("#containerPokemon");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let max = 8;
let min = 1;
//funcion para consumir api de pokemones
const fetchPokemon = async(id) => {
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    // console.log(response)
     const data = await response.json()
     console.log(data)
}

fetchPokemon(min)