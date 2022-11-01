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

 // Велогонщик
 class Racer { // Класс Велогонщик
     constructor(name, number, rating, lastname) { // Конструктор класса
         this.name = name;
         this.number = number;
         this.rating = rating;
         this.lastname = lastname;
     }
 }

 // Страна
 class Country { // Класс Страна
     constructor(country) { // Конструктор класса
         this.people = [] // Массив велосипедистов, имеет объекты класса Racer
         this.times = [] // Массив времени каждого велосипедиста на каждом этапе
         this.averageRating = 0; // Средний рейтинг велосипедистов
         this.maxTime = 0; // Время хучшего или лучшего велосипедиста
         this.sumPlace = 0; // Сумма мест каждого этапа
         this.maxPlace = 0; // Самое максимальное место среди всех этапов
         this.country = country; // Названия страны
     }
     setHuman(name, number, rating, lastname) { // Записываем велосипедиста в массив класса
         this.people.push(new Racer(name, number, rating, lastname)); // имя, номер, рейтинг, фамилия
     }
     getAverageRating() { // Функция получения среднего арифметического рейтинга 
         for (let i = 0; i < this.people.length; ++i) {
             this.averageRating += this.people[i].rating;
         }
         this.averageRating /= this.people.length;
     }
     setTime() { // Функция устанавливает время прохождения этапа для велосипедистов
         for (let i = 0; i < this.people.length; i++) {
             this.times.push(time());
         }
     }
     setSumPlace(place) { // Функция подсчитывает сумму мест на каждом этапе
         this.sumPlace += place;
         if (place > this.maxPlace)
             this.maxPlace = place;
     }
     clearTime() { // Функция очищает время прохождения этапа, для велосипедистов
         if (this.times.length > 0)
             this.times = []
     }
     getMaxTime() { // Функция получения времени худшего (занявшего четвертое место) гонщика этой страны
         this.maxTime = Math.max(...this.times);
     }
     getMinTime() { // Функция получения времени лучшего (занявшего первое место) гонщика этой страны
         this.maxTime = Math.max(...this.times);
         for (let i = 0; i < this.times.length; ++i) {
             if (this.times[i] < this.maxTime)
                 this.maxTime = this.times[i];
         }
     }
 }

 // Создаем страны и записываем в них гонщиков
 let russia = new Country('Россия');
 russia.setHuman('Михаил', '1', '5', 'Зорин');
 russia.setHuman('Олег', '2', '4', 'Смирнов');
 russia.setHuman('Евгений', '3', '3', 'Петров');
 russia.setHuman('Константин', '4', '2', 'Сергеев');
 let germany = new Country('Германия');
 germany.setHuman('Макс', '5', '5', 'Мустерманн');
 germany.setHuman('Макс', '6', '4', 'Мустерманн');
 germany.setHuman('Макс', '7', '3', 'Мустерманн');
 germany.setHuman('Макс', '8', '2', 'Мустерманн');
 let france = new Country('Франция');
 france.setHuman('Макс', '9', '5', 'Мустерманн');
 france.setHuman('Макс', '10', '4', 'Мустерманн');
 france.setHuman('Макс', '11', '2', 'Мустерманн');
 france.setHuman('Макс', '12', '3', 'Мустерманн');
 let america = new Country('США');
 america.setHuman('Макс', '13', '5', 'Мустерманн');
 america.setHuman('Макс', '14', '4', 'Мустерманн');
 america.setHuman('Макс', '15', '3', 'Мустерманн');
 america.setHuman('Макс', '26', '2', 'Мустерманн');
 let finland = new Country('Финляндия');
 finland.setHuman('Макс', '17', '5', 'Мустерманн');
 finland.setHuman('Макс', '18', '4', 'Мустерманн');
 finland.setHuman('Макс', '18', '3', 'Мустерманн');
 finland.setHuman('Макс', '19', '2', 'Мустерманн');
 let italy = new Country('Италия');
 italy.setHuman('Макс', '20', '5', 'Мустерманн');
 italy.setHuman('Макс', '21', '4', 'Мустерманн');
 italy.setHuman('Макс', '22', '3', 'Мустерманн');
 italy.setHuman('Макс', '23', '2', 'Мустерманн');
 let spain = new Country('Испания');
 spain.setHuman('Макс', '29', '5', 'Мустерманн');
 spain.setHuman('Макс', '30', '4', 'Мустерманн');
 spain.setHuman('Макс', '31', '3', 'Мустерманн');
 spain.setHuman('Макс', '32', '2', 'Мустерманн');

 let countries = [russia, germany, france, america, finland, italy, spain] // Массив стран

 //количество этапов ввод пользователя для первого круга
 function stageCount() {
     let Q = +prompt('Введите количество этапов:');
     return Q;
 }