const CalculateSum = (array) => {

    const pairNumbers = array.filter(x=> x % 2 == 0);

    const sum = pairNumbers.reduce((a,b) => a + b, 0);

    return sum;
}

const populateArray = () => {

    let array = [];
    for (let i=11; i < 50; i++){
         array.push(i);
   }
     return array;
}

const array = populateArray();

console.log("Array", array);

const sum = CalculateSum(array);

console.log("Suma", sum);