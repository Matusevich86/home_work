"use strict";

function randomDiap(n,m) {
        return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    
    console.log( 'цветов: ' + colorsCount );
    
    var used = {};

        for ( var i=1; i<=colorsCount; i++ ) {
            do {
                var n=randomDiap(1,7);
                var colorName=colors[n];
            }while(colorName in used);

            console.log( colorName );
            used[colorName] = true;
        }


    
}

mood(6);