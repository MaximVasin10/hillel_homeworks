var variable = 'number' + 3 + 3; //number33 через конкатенацію
console.log(variable);

variable = null + 3;//3 через те, що null перетворюється на 0 
console.log(variable);

variable = 5 && "qwerty";//qwerty. Оператор && повертає останнє істинне значення або перше хибне.
console.log(variable);

variable = +'40' + +'2' + "hillel";//42hillel через унарню операцію +
console.log(variable);

variable = '10' - 5 === 6;//false. Спочатку виконуємо унарну операцію - і отримаємо 10-5=5,і після виконуємо оператор сурової рівності 5 === 6 і отримаємо false
console.log(variable);

variable = true + false;//1. через унарний + true перетворюється на 1, false на 0 і виконуємо операцію суми 1+0=1
console.log(variable);

variable = '4px' - 3;//Nan. Неможливо перетворити 4px на число, хоча через унарний - компілятор намагається це зробити
console.log(variable);

variable = '4' - 3;//1. 4-3=1
console.log(variable);

variable = '6' + 3 ** 0;//61. Спочатку возводимо в ступінь 3**0=1, потім конкатенація так як "6" в лапках 
console.log(variable);

variable = 12 / '6';//2. Спочатку унарна операція, тому "6" перетворюється на число
console.log(variable);

variable = '10' + (5 === 6);//10false. конкатенація зпочатку, тому 10 + (5 === 6 повертає false)
console.log(variable);

variable = null == '';//false. Null це об'єкт що рівний undefined
console.log(variable);

variable = 3 ** (9 / 3);//27. Зпочатку виконуємо дію в лапках (9/3=3), потім возводимо в ступінь 3 ** 3 = 27
console.log(variable);

variable = !!'false' == !!'true';//true. Примусове перетворення в булеан. І так як обидва значення це string то ми порівнюємо true == true  і отримаємо true
console.log(variable);

variable = 0 || '0' && 1;//1. Останнє істинне значення
console.log(variable);

variable = (+null == false) < 1;//false. +null = 0, false перетворюється на 0. 0==0 це true. true=1. 1<1 дає false
console.log(variable);

variable = false && true || true;//true. false && true= false, false|| true= true
console.log(variable);

variable = false && (false || true);//false. false || true=true; false && true = false
console.log(variable);

variable = (+null == false) < 1 ** 5;//false. 1 == 1 є true і повертаємо 1. 1 ** 5 = 1. 1<1 повертає false
console.log(variable);