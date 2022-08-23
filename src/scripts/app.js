const pokemContainer = document.querySelector("#containerPokemon");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let max = 8;
let min = 1;
//funcion para consumir api de pokemones
const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  // console.log(response)
  const data = await response.json();
  createPokemon(data)
};
const fetchPokemons = (min, max) => {
     for (let index = min; index <= min + max; index++) {
       fetchPokemon(index)
  }
};

const createPokemon = (poke) => {
     const card = document.createElement('div')
     card.classList.add('card')
     const name = document.createElement('p')
     name.innerHTML = poke.name

     card.appendChild(name)
     pokemContainer.appendChild(card)
}
fetchPokemons(min, max);
