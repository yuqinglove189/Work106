'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var res=[];
  var j=0;
  var add=[];
  for(var i=0;i<collectionA.length;i++){
    if(collectionA[i].length==1){
       if(i==collectionA.indexOf(collectionA[i]))
       {res[j]={ key:collectionA[i], count:1};  
        add.push(collectionA[i]); 
        j++;
       }
  else{  res[add.indexOf(collectionA[i])].count++; }
  }
     if(collectionA[i].length==3){
       res[j]={ key:collectionA[i].charAt(0), count:parseInt(collectionA[i].charAt(2))};
     }
 
  }
  var arr=[];
  arr=objectB.value;
  var k;
  for(let i=0;i<arr.length;i++)
   for(let j=0;j<res.length;j++)
       if(arr[i]==res[j].key)
         {k=res[j].count;
           res[j].count=k-parseInt(k/3);}
     return res; 
}
