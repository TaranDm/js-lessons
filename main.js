/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict'

let numberOfFilms;
function start(){
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели', ''); 
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
  }
}
start();

let personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
};
//3.

function rememberMyFilms() {
  if((personalMovieDB.count >= 10) &&(personalMovieDB.count <= 30) ) {
    alert('Вы классический зритель');
  }else if(personalMovieDB.count<10) {
    alert('Просмотрено довольно мало фильмов');
  }else if(personalMovieDB.count>30)
  {alert('Вы киноман');}else (
      alert('error')
    );
}
rememberMyFilms();

//1

 function detectPersonalLevel(){
   for(let i = 0; i < 2; i++ ) {
     const a = prompt('Один из последних просмотренных фильмов?', '');
     const b = prompt('На сколько оцените его?', '');
     //2.
     if ((a == null) || (b == null) || a.length > 50 || b.length > 50 || (a == '') || (b == '')) {
       i--;
       console.log('error');
     }else {
       personalMovieDB.movies[a] = b;
     }
   }
 }
// detectPersonalLevel();

function showMyDB(){
  while(personalMovieDB.privat == false){
    console.log(personalMovieDB );
    break;
  }
}
showMyDB();
function writeYourGenres() {
  for(let i = 0; i < 3; i++ ) {
      const c = prompt(`${i+1}. Ваш любимый жанр `, '');
    personalMovieDB.genres[i] = c 
  }
}
writeYourGenres();


// Код возьмите из предыдущего домашнего задания
"use strict";









