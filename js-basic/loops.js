// For

for (let index = 0; index < 10; index++) {
  console.log("Numero da vez => ", index);
}

// While

let counter = 0;

// pergunta antes de fazer, pergunta primeiro, faz depois
while (counter < 10) {
  console.log("counter is => ", counter);

  counter++; // counter = counter + 1;
}

// Do While

let diasParaFestaJulina = 10;

// chega fazendo, faz primeiro, pergunta depois
do {
  console.log("Dias para a festa julina => ", diasParaFestaJulina);

  diasParaFestaJulina--;
} while (diasParaFestaJulina > 0);

// Foreach (usar com Arrays)

// pode declarar o array aqui
[1, 2, 3, 4, 5].forEach((each) => {
  console.log("Each => ", each);
});

// ou assim
const candies = ["Pipoca", "Pé de Moleke", "Quentão", "Amendoim", "Canjica"];

candies.forEach((candy) => {
  console.log("Candy => ", candy);
});
