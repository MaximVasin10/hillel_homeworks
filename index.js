function getRandomValues(min, max, amount) {
    let numbers = [];
    while(amount>0)
    {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        amount--;
        //console.log(numbers[numbers.length-1]);
    }
    return numbers;
}

function checkProbabilityTheory(numbers){
    let paired = 0;
    let unpaired = 0;

    for(let i=0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            paired++;
        }else{
            unpaired++;
        }
    }
    console.log("Кількість згенерованих чисел: " + numbers.length);
    console.log("Кількість парних чисел: " + paired);
    console.log("Кількість непарних чисел: " + unpaired);
    console.log("Парних чисел в відсотковому співвідношенні " + ((paired * 100) / numbers.length));
    console.log("Непарних чисел в відсотковому співвідношенні " + ((unpaired * 100) / numbers.length));
}

let count = 2000;
let numbers = getRandomValues(100, 1000, count);
checkProbabilityTheory(numbers);
