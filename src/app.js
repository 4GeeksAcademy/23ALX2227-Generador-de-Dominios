/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["yo", "tu", "el", "nosotros", "ellos"];
let noun = [
  "mago",
  "leon",
  "arbol",
  "invocador",
  "geeks",
  "camper",
  "gamer",
  "jugador"
];
let adj = [
  "super",
  "alto",
  "fuerte",
  "incanzable",
  "bello",
  "musculoso",
  "magico",
  "ancestral"
];
let ext = [".es", ".com", ".com.ar", ".com.nz"];

function domainNameGenerator(pronoun, noun, adj, ext) {
  let numPronoun = Math.floor(Math.random() * pronoun.length);
  let numNoun = Math.floor(Math.random() * noun.length);
  let numAdj = Math.floor(Math.random() * adj.length);
  let numExt = Math.floor(Math.random() * ext.length);

  return pronoun[numPronoun] + noun[numNoun] + adj[numAdj] + ext[numExt];
}

function onLoad() {
  let domainGen = document.getElementById("domainGenerator");
  domainGen.innerHTML = domainNameGenerator(pronoun, noun, adj, ext);
}

window.onload = onLoad;
