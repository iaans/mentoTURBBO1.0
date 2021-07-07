// types of variables

var foo = "Foo";
let bar = "Bar";

// console.log(foo, bar); // Foo Bar

if (true) {
  const localConst = "test"; // existe apenas no escopo deste if
  var moo = "Mooo";
  let baz = "Bazz";

  // localConst = "alterado" // nao pode alterar pois é const

  console.log(moo, baz, localConst);
}

console.log(moo); // Mooo
console.log(localConst); // ReferenceError
console.log(baz); // ReferenceError
