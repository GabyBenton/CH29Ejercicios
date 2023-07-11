/* Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.
 */
function businessHours(dayNumber, hourNumber){
    if((dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)){
            console.log("Estas en horario laboral:");
            return true;
    
    }else{
        console.log("No es horario laboral:");
        return false;
    }
}//businessHours

/* Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/

function getDayNumber(janFirstDayNumber,yearDayNumber){
    let result=(janFirstDayNumber+(yearDayNumber-1))%7
    console.log(result);
    if(result==0){
        return("El día es domingo");
    }
    else if(result==1){
        return("El día es lunes");
    }
    else if(result==2){
        return("El día es martes");
    }
    else if(result==3){
        return("El día es miercoles");
    }
    else if(result==4){
        return("El día es jueves");
    }
    else if(result==5){
        return("El día es viernes");
    }
    else{
        return("El día es sábado");
    }
    
}//getDayNumber

// Part 3
// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

// function yearDayNumber2(result, hourNumber2){
//     if((result>=1) && (result<=5) 
//     && (hourNumber2>=9) && (hourNumber2<=18)){
//             console.log("Estas en horario laboral:");
//             return true;
//     }else{
//         console.log("No es horario laboral:");
//         return false;
//     }//else
// }//yearDayNumber2

function trabajo(yearDayNumber2,hourNumber2){
    let day= getDayNumber(0,yearDayNumber2);

    return businessHours(day,hourNumber2);
}

console.log(trabajo(72,17));