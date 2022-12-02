"use strict"
function anketa() {
    var nameEnt ='Введите имя';
    var surNameEnt = 'Введите фамилию';
    var lastNameEnt = 'Введите отчиство';
    var ageEnt = 'Введите ваш возраст';
    var genderMes;
    var pens;
    do{
        var name = prompt(nameEnt);
        var nameEnt = 'Поле не должно быть пустым';
    }while (!name);

    do{
        var surName = prompt(surNameEnt);
        var nameEnt = 'Поле не должно быть пустым';
    }while (!surName);

    do{
        var lastNane = prompt(lastNameEnt);
        var lastNameEnt = 'Поле не должно быть пустым';
    }while (!lastNane);

    do{
        var ageS = prompt(ageEnt);
        var age = parseInt(ageS);
    }while (isNaN(age));

    var gender = confirm ('Are you a man? If yes press Ok');
    if(gender == true){
    genderMes='мужской';
    }else{
        genderMes='женский';
    }

    if(genderMes ==='мужской' && age >= 60){
        pens = 'Да';
    }else if(genderMes ==='женский' && age >= 55){
        pens= 'Да';
    }else{
        pens= 'нет';
    }
    

    alert('Ваше ФИО: '+surName+' '+name+' '+lastNane +'\n'+ 'Ваш возраст в годах: '+age +'\n'+ 'Ваш возраст в днях: '+age*365 + '\n' + 'Через пять лет вам будет: '+ (age + 5) + '\n' + 'Ваш пол мужской: '+genderMes +'\n'+'Bы на пенсии: '+ pens);

    
}
anketa();