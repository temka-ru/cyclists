function start() {
    stageCount();
    startCompetition(stageCount);
    result1Place();
    finishCompetition();
    result2Place();
    result();
}


// console.log("Итоговый протокол 1 круга: ");
function result1Place() {
    document.write("Итоговый протокол 1 круга: </br>");
    let place = 1;
    for (let i = 0; i < countries.length; ++i) {
        document.write(place++ + " место " + countries[i].country);
        document.write("</br>");
    }
}

// console.log('Итоговый протокол 2 круга: ');
function result2Place() {
    document.write("Итоговый протокол: </br>");
    let place = 1;
    for (let i = 0; i < secondStage.length; ++i) {
        document.write(place++ + " место " + secondStage[i].country);
        document.write("</br>");
    }
}

//количество этапов ввод пользователя для первого круга
function stageCount() {
    let Q = +prompt('Введите количество этапов:');
    return Q;
}

// СТРАНА ПОБЕДИТЕЛЬ
function result() {
    //  alert('Страна-победитель соревнований: ' + secondStage[0].country);
    document.write("</br>");
    document.write('Страна-победитель соревнований: ' + secondStage[0].country);
}