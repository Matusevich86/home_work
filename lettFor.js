"use strict";
(function() {
    var text = 'Введите тееекст пожалуйста';

    function countGl(t){
        var sa=t.toLowerCase().split('');
        var vs=['а','е','ё','и','о','у','ы','э','ю','я'];
        var sum = 0;
        
        function f(v,i,a){
            if (vs.indexOf(v) != -1){
                sum ++;
            }
        }
        sa.forEach(f);
        
        console.log(sum);

    }countGl(text);

})();