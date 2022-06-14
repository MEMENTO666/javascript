const pokemon = {
  a : "팬텀",
  b : "고오스",
  c : "고스트",
  d : "루쥬라"
}

// console.log(pokemon.a); //! 밑에와 같이 따옴표를 쓰는걸 단축시키기 위해 .a 로 표기
// console.log(pokemon["a"]); // ! 이것이 원형이다.



let pokemonArr = [];
for ( let props in pokemon) {
  console.log(pokemon[props]);
  pokemonArr.push(pokemon[props]);
}
console.log(pokemonArr);