import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
import "./flavortext.js";

Pokemon.prototype.dPadEvolution = function() {
  $(".d-up").off();
  $(".d-down").off();
  // $(".d-up").click( () => {
  //   this.flavorTextLookup(this.number - 1);
  //   console.log(this);
  // });
  $(".d-down").click( () => {
    let currentPokemon = this.number;
    let babyPromise = new Promise(function(resolve,reject) {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}`;
      let request = new XMLHttpRequest();
      request.onload = function(){
        if (this.status === 200) {
          resolve(request.response);
        }else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    babyPromise.then(response => {
      let baby = JSON.parse(response);
      // console.log(baby);
      this.flavorTextLookup(baby.evolves_from_species.name);
    });

    // console.log(baby.evolves_from_species.name);

    // console.log(this.number);
    // console.log(this.name);
    // this.evolution = pokemonCalled.evolves_from_species.name;
    // let basicPokemon = this.pokemonNameCall(this.name);
    // console.log(basicPokemon);
  });
}
