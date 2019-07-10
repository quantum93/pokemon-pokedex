import './styles.css';
import 'bootstrap';
import $ from "jquery";
import "./pokemon-api-caller.js";
import "./flavortext.js";
import "./display.js";
import "./pokemon-cries.js";
import { Pokemon } from "./pokemon-api-caller.js";
import './randompokemon.js'
import './teampokemon.js'
import "./weight-height-calc.js";
import { bootUp,blinkingButtons,imgAnimation } from './animations.js';

// this controls the random pokemon of the day
let today = new Date();
let pokemonIndex = parseInt((today.getTime()/8.64e+7)%151);
let pokemonOfTheDay = new Pokemon();



$(document).ready(function() {

  // boot up animation
  setTimeout(function(){
    bootUp();
  }, 3000);

  // this delays the load of the initial pokemon
  setTimeout(function(){
    pokemonOfTheDay.flavorTextLookup(pokemonIndex);
  }, 5000)
  
 

  $('#name-form').submit(function(event){
    event.preventDefault()
    console.log('form submitted');
    let pokemonSearch = new Pokemon();
    let name = $('#name').val().toLowerCase();
    pokemonSearch.flavorTextLookup(name);
    console.log(pokemonSearch)
    $('.display-screen').click(function(){
      displayImg(pokemonSearch)
      console.log('trying to display')
    });

  });
  $('.sprite-container').on('click', function(){
    console.log('clicked');
    pokemonSearch.imgAnimation();
  });
});
