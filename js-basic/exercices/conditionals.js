//SwtichCase
//Funções devem conter verbos e demonstrar o que ela faz através do nome
function getChampion(champion) {
  let team;
  switch (champion) {
    case "Italia":
      team = "Bicampeã";
      break;
    case "Inglaterra":
      team = "Vice campeã";
      break;
    default:
      return "Foi eliminado";
  }
  return team;
}
getChampion("Italia");
console.log(getChampion("Italia"));

// If & Else;
const value1 = 30;
const value2 = "30";

if (value1 === value2) {
  console.log("Os valores e tipos são iguais");
}
if (value1 == value2) {
  console.log("Apenas os valores são iguais");
}

//Equals x2
console.log(value1 == value2);
//Equals x3
console.log(value1 === value2);
