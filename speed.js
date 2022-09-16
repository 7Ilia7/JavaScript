console.time('our cicle');
for (let i = 0; i < 1000; i++){
    console.log(Math.pow(i, 0.5));
}
console.timeEnd('our cicle')

//измерение скорости действия скрипта через взятие в блок использую console.time
