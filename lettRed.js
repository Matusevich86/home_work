"use strict";
(function() {
    var text = 'Введите тЕкст пожалуйста';

    function countGl(t){
        var sa=t.toLowerCase().split('');
        var vs=['а','е','ё','и','о','у','ы','э','ю','я'];
        
        var vc = sa.reduce((vc, c)=>{
            if(vs.indexOf(v) != -1)
                vc++;
                return vc;
        },0);
        console.log(vc);

    }countGl(text);

})();