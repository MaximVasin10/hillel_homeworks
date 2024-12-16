var atb = {
    "Серветки": 10,
    "Картопля": 70,
    "Морква": 20,
    "Снікерс": 18
};

atb['Моршинська'] = 17;

function price (products){
    let sum = 0;

    for (let key in products) {
        sum += products[key];
    }

    console.log("Сумарна сума усіх продуктів АТБ дорівнює " + sum + " ГРИВЕНЬ");
}

function minPrice (products){
    let cheapest = 100000;

    for(let i = 0; i < Object.keys(products).length; i++){
        if (cheapest > products[Object.keys(products)[i]]){
            cheapest = products[Object.keys(products)[i]];
        }
    }

    console.log("Найдешевший продукт в АТБ коштує " + cheapest + " ГРИВЕНЬ");
}

function maxPrice (products){
    let costliest = 0;

    for(let i = 0; i < Object.keys(products).length; i++){
        if (costliest < products[Object.keys(products)[i]]){
            costliest = products[Object.keys(products)[i]];
        }
    }

    console.log("Найдорожчий продукт в АТБ коштує " + costliest + " ГРИВЕНЬ");;
}


price(atb);
minPrice(atb);
maxPrice(atb);

