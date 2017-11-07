'use strict';

module.exports = function countSameElements(collection) {
  var res=[];
  var j=0;
  var add=[];
 
 
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i].length==1)
    {
      if(i==collection.indexOf(collection[i]))
      {
         res[j]={ name:collection[i], summary:1};   
         add.push(collection[i]); 
         j++;
      }
 
    else{
      res[add.indexOf(collection[i])].summary++;
      }
    }
 
     if(collection[i].length==3)
     {
         if(add.indexOf( collection[i].charAt(0) ) !==-1  )
         {
           var n=add.indexOf( collection[i].charAt(0) );
           var s=parseInt(collection[i].charAt(2));
           res[n].summary=res[n].summary+s;
         }
 
       else {
             res[j]={ name:collection[i].charAt(0), summary:parseInt(collection[i].charAt(2))}; j++;
             add.push(collection[i].charAt(0));
            }
     }
 
 if(collection[i].length>3)
 { 
   var a=collection[i].charAt(1);
   if(a=='['){
    if(add.indexOf( collection[i].charAt(0) ) !==-1  )
      {
          var p=add.indexOf( collection[i].charAt(0) );
          var m=parseInt(collection[i].substring(2,collection[i].length-1) );
          res[p].summary=res[p].summary+m;
           
      }
    else {
        res[j]={ name:collection[i].charAt(0), 
        summary:parseInt(collection[i].substring(2,collection[i].length-1))};
        j++;
        add.push(collection[i].charAt(0));
     }
   }
   }
 }
  return res;   
 }
 