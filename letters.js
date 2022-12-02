"use strict";
(function() {
    var text = 'Введите текст пожалуйста';

    function countGl(t){
        var sa=t.toLowerCase().split('');
        var vs="аеёиоуыэюя";
        var sum = 0;
        for (var i = 0; i < sa.length; i++){
            var c = sa[i];
            if (vs.indexOf(c) != -1){
                sum ++;
            }
            
        }console.log(sum);

    }countGl(text);

})();