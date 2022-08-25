'use strict';


const personalMovieDB = { // объект со всеми данными
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 1; i<= personalMovieDB.count; i++) {

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
    },

    detectPersonalLevel: function() {
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
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i<=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i,) => {
            console.log(`Ваш любимый жанр ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else if  (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        
        }
    }

};



