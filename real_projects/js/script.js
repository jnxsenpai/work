'use strict';

let numberOfFilms;

function start() {  // узнает сколько фильмов просмотрено
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = { // объект со всеми данными
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() { //опрашивает и переносит просмотренные фильмы и их оценки в объект
    for (let i = 1; i<= numberOfFilms; i++) {

        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько оцените его?', '').trim();
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }      
    }
}

rememberMyFilms();


function detectPersonalLevel() { // дает ранг пользователю в зависимости от кол-ва фильмов
    if (personalMovieDB.count < 10){
        alert ('Просмотрено довольно мало фильмов');
    }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
            alert ('Вы классический зритель');
        }
        else if (personalMovieDB.count >= 30) {
            alert ('Вы киноман');
        }
        else {
            alert ('Произошла ошибка');
        }
    
}

detectPersonalLevel();


function showMyDB() { // проверяет объект с данными на приватность
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() { // спрашивает жанр и переносит в объект
    for (let i = 1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();
