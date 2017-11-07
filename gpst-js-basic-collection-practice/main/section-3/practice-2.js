'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var n=0;
    for(var i=0;i<collectionA.length;i++)
    {
        for(var j=0;j<objectB.value.length;j++)
        {
            if(collectionA[i].key==objectB.value[j]&&collectionA[i].count>=3)
            {
                n=collectionA[i].count/3;
                var m=parseInt(n);
                collectionA[i].count=collectionA[i].count-m;
            }

        }
    }

  return collectionA;
}
