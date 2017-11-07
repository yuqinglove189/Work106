'use strict';

module.exports = function countSameElements(collection) {
  const res=[];
  for(var i=0;i<collection.length;)
  {
      var count=0;
      for(var j=0;j<collection.length;j++)
      {
          if(collection[i]==collection[j]&&collection[i].length==1)
          {
              count++;
          }
      }
      res.push({key:collection[i],count:count});
      i+=count;  
  }
  return res;
}
