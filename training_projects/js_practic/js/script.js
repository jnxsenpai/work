"use strict";

function getTimeFromMinutes(time) {
    let hours = 0;
    let minutes = 0;
    let c = time;
    if (Number.isInteger(time) !== true || time < 0) {
        return "Ошибка, проверьте данные";

    } else  {
        hours = c / 60;
        minutes = time % 60;
       
        
    }
    return console.log(`Это ${parseInt(hours)} часов, ${minutes} минут`);

}
getTimeFromMinutes(10);