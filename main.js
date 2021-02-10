



/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



// Код возьмите из предыдущего домашнего задания

'use strict'



let personalMovieDB = {
  'count': 0,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
  start:function(){
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели', '');
  while(personalMovieDB.count == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели', '');
  }
},
 rememberMyFilms: function() {
  if((personalMovieDB.count >= 10) &&(personalMovieDB.count <= 30) ) {
    alert('Вы классический зритель');
  }else if(personalMovieDB.count<10) {
    alert('Просмотрено довольно мало фильмов');
  }else if(personalMovieDB.count>30)
  {alert('Вы киноман');}else (
      alert('error')
    );
},
 detectPersonalLevel: function() {
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
},
  showMyDB: function(){
  while(personalMovieDB.privat == false){
    console.log(personalMovieDB );
    break;
  }
},
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }
    else{
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
  for(let i = 0; i < 3; i++ ) {
    let genre  = prompt(`${i+1}. Ваш любимый жанр `, '');
    if(genre === '' || genre == null) {
      console.log('Вы ввели некорректные данные или не ввели их вообще');
      i--;
    }else {
      personalMovieDB.genres[i] = genre;
    }
    personalMovieDB.genres.forEach((item, i)=>{
      console.log(`Любимый жанр ${i+1} - это ${item}`)
    })
  }
},
};











