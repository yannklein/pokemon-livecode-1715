
// Hints
/////////
 const allPokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
const onePokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
// Data per pokemon:
// 1) name
// 2) image (sprites/other/dream_world/front_default)
// 3) all their types (types/type/name)


// import mustache
import Mustache from "mustachejs";

// Display all pokemons
// ////////////////////
// select html element #cardTemplate
const template = document.querySelector("#cardTemplate");

// select html element #cardsContainer
const container = document.querySelector("#cardsContainer");

// create a apiURL 

// fetch pokemon through api (for the list of pokemon)
const showPokeDetails = (pokemonData, pokeCard) => {
  // select the all card element
  const infoTemplate = document.querySelector("#infoTemplate");
  const infoContainer =  document.querySelector("#infoContainer");
  // listen to click on all cards
  // fetch pokemon through api (for the details)
  // change the DOM (change the template)
  pokeCard.addEventListener("click", (event) => {
    console.log(event);
    const output = Mustache.render(infoTemplate.innerHTML, pokemonData);
    infoContainer.innerHTML = output;
  })
}

const displayPokemon = (pokemonData) => {
  const pokiData = {
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.other.dream_world.front_default,
    types: pokemonData.types.map(type => type.type.name)
  }
  const output = Mustache.render(template.innerHTML, pokiData);
  container.insertAdjacentHTML("beforeend", output);
  const pokeCard = container.lastElementChild;
  // display poke details
  showPokeDetails(pokiData, pokeCard);
}

const getPokemonData = (pokemonArray) => {
  pokemonArray.forEach((pokemon)=> {
    fetch(pokemon.url)
    .then(response => response.json())
    .then(data => {
      displayPokemon(data);
    });
  })
}


fetch(allPokeUrl)
  .then(response => response.json())
  .then((data) => {
    getPokemonData(data.results);
  });



// change the DOM (change the template)
// 






// Display one pokemon details
// ///////////////////////////




