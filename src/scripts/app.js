const pokemonContainer = document.querySelector("#containerPokemon");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

pokemonContainer.classList.add("d-flex", "flex-wrap","justify-content-between");

let max = 7;
let min = 1;

//funcion para consumir api de pokemones
const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  // console.log(response)
  const data = await response.json();
  createPokemon(data);
};
const fetchPokemons = (min, max) => {
  for (let index = min; index <= min + max; index++) {
    fetchPokemon(index);
  }
};

const createPokemon = (poke) => {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card","mb-4");

  const card = document.createElement("div");
  //card.classList.add("card", "m-5", "p-5", "pokemon-block");
  card.classList.add("card-pokemon", "pokemon-block");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const name = document.createElement("h3");
  name.innerHTML = poke.name;
  name.classList.add("text-center", "fw-bolder");

  const number = document.createElement("p");
  number.textContent = `# ${poke.id.toString().padStart(3, 0)}`;
  number.classList.add("text-center", "fw-bolder");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  const imagePoke = document.createElement("img");
  imagePoke.src = poke.sprites.other.home.front_default;
  imagePoke.classList.add("card-img-top");
  imageContainer.appendChild(imagePoke);

  card.appendChild(name);
  card.appendChild(number);
  card.appendChild(imageContainer);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");
  cardBack.innerHTML = poke.stats[0].base_stat;

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  flipCard.appendChild(cardContainer);
  pokemonContainer.appendChild(flipCard);
};

fetchPokemons(min, max);
