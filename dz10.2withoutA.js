const text = "apple bAnana cherry abc ac adc abbc Happiness Time Task Apple Wonderful Joyful";
const pattern = /\s(?<=\s|^)[^aA]{6,}\s/g;
const results = text.match(pattern);
console.log(results);