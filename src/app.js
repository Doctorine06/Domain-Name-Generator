/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = ExcuseGen();
  console.log("Hello Rigo from the console!");
};

let ExcuseGen = () => {
  let pronoun = ["I", "The"];
  let adjective = ["giant", "delicious", "gorgeous"];
  let noun = ["bug", "music"];

  let pronounindex = Math.floor(Math.random() * pronoun.length);
  let adjectiveindex = Math.floor(Math.random() * adjective.length);
  let nounindex = Math.floor(Math.random() * noun.length);

  return (
    pronoun[pronounindex] + adjective[adjectiveindex] + noun[nounindex] + ".com"
  );
};
