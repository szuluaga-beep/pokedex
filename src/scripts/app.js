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
     card.classList.add('card',"m-5","p-5")
     card.classList.add("card-pokemon");
     
     const name = document.createElement('h3')
     name.innerHTML = poke.name
     name.classList.add('text-center','fw-bolder')

     const number = document.createElement("p");
     number.textContent = `# ${poke.id.toString().padStart(3, 0)}`;
     number.classList.add("text-center", "fw-bolder");

     const imagePoke = document.createElement('img')
     imagePoke.src = poke.sprites.other.home.front_default;
     imagePoke.classList.add('card-img-top')

     card.appendChild(name)
     card.appendChild(number)
     card.appendChild(imagePoke)
     pokemContainer.classList.add("d-flex", "flex-wrap")
     pokemContainer.appendChild(card)
}
fetchPokemons(min, max);
