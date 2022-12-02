"use strict";
(function() {
    var text = 'Введите тЕкст пожалуйста';

    function countGl(t){
        var sa=t.toLowerCase().split('');
        var vs=['а','е','ё','и','о','у','ы','э','ю','я'];
        
        var ga = sa.filter(v => vs.indexOf(v) != -1);

        console.log(ga.length);

    }countGl(text);

})();