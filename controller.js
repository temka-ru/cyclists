 // получение времени для велосипедистов, за которое они прошли этап
 function time() {
     let time = 0;
     time += Math.random() * 5 + 1;
     //округлить до сотых
     time = Math.round(time * 100) / 100;
     return time;
 }

 // сортировка массива стран по лучшему результату(По худшему гонщику страны)
 function sort(countries) {
     for (let i = 0; i < countries.length - 1; ++i) {
         for (let j = i + 1; j < countries.length; ++j) {
             if (countries[i].maxTime > countries[j].maxTime) {
                 let temp = countries[i]
                 countries[i] = countries[j]
                 countries[j] = temp;
             }
         }
     }
 }

 // Сортировка по сумме мест N этапов, для 1 круга
 function sortSumFirstPlaces(countries) {
     for (let i = 0; i < countries.length - 1; ++i) {
         for (let j = i + 1; j < countries.length; ++j) {
             if (countries[i].sumPlace > countries[j].sumPlace) {
                 let temp = countries[i]
                 countries[i] = countries[j]
                 countries[j] = temp;
                 // Если суммы мест кажого этапа будут равны, то считаем по среднему арифметическому рейтинга
             } else if (countries[i].sumPlace == countries[j].sumPlace) {
                 if (countries[i].maxPlace < countries[j].maxPlace) {
                     let temp = countries[i]
                     countries[i] = countries[j]
                     countries[j] = temp;
                 }
             }
         }
     }
 }

 // Сортировка по сумме мест 2 этапов, для 2 круга
 function sortSumSecondPlaces(countries) {
     for (let i = 0; i < countries.length - 1; ++i) {
         for (let j = i + 1; j < countries.length; ++j) {
             if (countries[i].sumPlace > countries[j].sumPlace) {
                 let temp = countries[i]
                 countries[i] = countries[j]
                 countries[j] = temp;
             } else if (countries[i].sumPlace == countries[j].sumPlace) {
                 if (countries[i].averageRating > countries[j].averageRating) {
                     let temp = countries[i]
                     countries[i] = countries[j]
                     countries[j] = temp;
                 }
             }
         }
     }
 }

 // начало соревнования
 function startCompetition(N) {
     let stage = 1;
     let place = 1;
     //  let array = [];
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
     // let secondStage = [] // Новый массив для 2 круга
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
 }