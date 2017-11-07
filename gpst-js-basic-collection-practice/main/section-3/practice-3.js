'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  const res=[];
  for(var i=0;i<collectionA.length;)
  {
      var count=0;
      for(var j=0;j<collectionA.length;j++)
      {
          if(collectionA[i]==collectionA[j])
          {
              count++;
          }
      }
      res.push({key:collectionA[i],count:count});
      i+=count;  
  }
   var n=0;
    for(i=0;i<res.length;i++)
    {
        for(j=0;j<objectB.value.length;j++)
        {
            if(res[i].key==objectB.value[j]&&res[i].count>=3)
            {
                n=res[i].count/3;
                var m=parseInt(n);
                res[i].count=res[i].count-m;
            }

        }
    }
  return res;
}
