'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    const collectionC=[''];
    var m=0;
    for(var i=0;i<collectionA.length;i++)
    {
        for(var j=0;j<objectB.value.length;j++)
        {
            if(collectionA[i]==objectB.value[j])
            {      
                collectionC[m]=collectionA[i];
                m++;
                
            }

        }
    }

  return collectionC;
}
