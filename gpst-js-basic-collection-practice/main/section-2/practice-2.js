'use strict';

module.exports = function countSameElements(collection) {
  var res=[];
  var add=[];
  var j=0;
  var arr=[];
  arr=res[0];
  for(var i=0;i<collection.length;i++){
    if(collection[i].length==1)
    {
       if(i==collection.indexOf(collection[i]))
       {
            res[j]={ key:collection[i], count:1};   
            add.push(collection[i]); 
            j++;
        }
        else
        { 
         res[j-1].count++;       
         }

    }
     if(collection[i].length>1){
         if(add.indexOf( collection[i].charAt(0) ) !==-1 )
         {var k=add.indexOf(collection[i].charAt(0) );
           var c=parseInt(collection[i].charAt(2));
           res[k].count=res[k]+c;
       }
 
       else res[j]={ key:collection[i].charAt(0), count:parseInt(collection[i].charAt(2))};
     }
 
  }
  return res;   
}