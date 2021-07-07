//Funções matemáticas

class Math{
    sum(valueA, valueB){
        return valueA + valueB
    }
    
    subtract(valueA, valueB){
        return valueA - valueB
    }
    
    multiply(valueA, valueB){
        return valueA * valueB
    }

    divide(valueA, valueB){
        return valueA / valueB
    }
}

const math = new Math(); //instância de objeto

const soma = math.sum(1,2);
const sub = math.subtract(1,2);
const mult = math.multiply(1,5)
const div = math.divide(6,3)

console.log("Soma: ",soma);
console.log("Subtração: ",sub);
console.log("Multiplicação: ",mult);
console.log("Divisão: ",div);