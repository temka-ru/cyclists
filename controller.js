 // начало соревнования
 function startCompetition() {
     let N = stageCount();
     let stage = 1;
     let place = 1;
     let array = [];
     //console.log('Круг 1: ');
     for (let i = 0; i < N; ++i) { // Проходим каждый этап 1 круга
         console.log("Этап: " + stage++);
         for (let j = 0; j < countries.length; ++j) {
             countries[j].clearTime(); // Если есть очищаем время каждого велосипедиста на прохождения этапа
             countries[j].setTime(); // Устанавливаем новое время случайным образом для этапа
             countries[j].getMaxTime(); // Получаем времея худшего (занявшего четвертое место) гонщика этой страны
             // console.log(countries[j].country + " время каждого велосипедиста " + countries[j].times);
         }
         for (let j = 0; j < countries.length; ++j) {
             // console.log("(Максимальное время) " + countries[j].country + " - " + countries[j].maxTime);
         }
         sort(countries); // Сортируем страны по худшему результату, у кого меньше время у того 1 место, для каждого этапа делаем эту операцию
         for (let j = 0; j < countries.length; ++j) {
             countries[j].setSumPlace(place); // Добавляем номер места в переменную
             console.log(place++ + " место - " + countries[j].country);
         }
         place = 1;
     }
     stage = 1;
     sortSumFirstPlaces(countries); // Сортируем по сумме мест этапов страны, получив итоговый протокол
 }

 // Второй круг
 let secondStage = [] // Новый массив для 2 круга
 function finishCompetition() {
     // запрос на вывод результатов второго круга
     let choice = alert("2 круг");

     for (let i = 0; i < 4; ++i) // Записываем первые 4 страны в новый массив
         secondStage.push(countries[i]);
     for (let i = 0; i < 4; ++i) { // Обнуляем максимальное место и сумму этапов страны
         secondStage[i].sumPlace = 0;
         secondStage[i].maxPlace = 0;
     }
     place = 1;
     // console.log('Круг 2: ');
     for (let i = 0; i < 2; ++i) { // Проходим по 2 следующим этапам 2 круга
         // console.log("Этап: " + stage++);
         for (let j = 0; j < secondStage.length; ++j) {
             secondStage[j].clearTime(); // Если есть очищаем время каждого велосипедиста на прохождения этапа
             secondStage[j].setTime(); // Устанавливаем новое время случайным образом для этапа
             secondStage[j].getMinTime(); // Получаем результат лучшего велосипедиста
             // console.log(secondStage[j].country + " время каждого велосипедиста " + secondStage[j].times);
         }
         for (let j = 0; j < secondStage.length; ++j) {
             // console.log("(Максимальное время лучшего велосипедиста) " + secondStage[j].country + " - " + secondStage[j].maxTime);
         }
         sort(secondStage); // Сортируем по времени лучших велосипедистов страны
         for (let j = 0; j < secondStage.length; ++j) {
             secondStage[j].setSumPlace(place); // Добавляем места в переменную, которая хранит сумму мест каждого этапа
             console.log(place++ + " место - " + secondStage[j].country);
         }
         place = 1;
     }
     // Получаем средний рейтинг игроков каждой страны
     for (let i = 0; i < secondStage.length; ++i) {
         secondStage[i].getAverageRating();
     }
     // Сортировка по сумме мест этапов страны, получив итоговый протокол
     sortSumSecondPlaces(secondStage);
     //  // console.log('Итоговый протокол 2 круга: ');
     //  document.write("</br>");
     //  document.write("Итоговый протокол: </br>");
     //  for (let i = 0; i < secondStage.length; ++i) {
     //      document.write(place++ + " место " + secondStage[i].country + " (сумма мест " + secondStage[i].sumPlace + ")");
     //      document.write("</br>");
     //  }
     // СТРАНА ПОБЕДИТЕЛЬ
     //  alert('Страна-победитель соревнований: ' + secondStage[0].country);
     //  document.write("</br>");
     //  document.write('Страна-победитель соревнований: ' + secondStage[0].country);
 }

 //  startCompetition();
 //  finishCompetition();