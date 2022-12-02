"use strict"
var treeM = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];

  function treeSum(x){
    var sum = 0;
    for(var i = 0; i < x.length; i++) {
        var v = x[i];
        if (typeof v == 'object') {
          sum += treeSum(v);
          }else{
            sum += v;
          }
        }; 
    return sum;  
  };
 treeSum(treeM);