// Create  function that reverses a string

// Soution 1
function reverse (str){
    // Check input
      if(!str || str.length<2 || typeof str!='string'){
        return 'NULL INPUT'
      }
      const backwards=[];
      const   totalItems =str.length-1;
      for(let i=totalItems; i>=0; i--){
         backwards.push(str[i]);
      }
      console.log(backwards);
      return backwards.join('');

    }


    // Solution 2

    function rev(str){
      return str.split('').reverse().join();
    }
    reverse('Hi my Name is Segun');



// merge sorted arrays

function mergeSortedArray(array1,array2)
{
    const mergedArrays=[];
    let array1Item=array1[0];
    let array2Item=array2[1];
    let i=1;
    let j=1;
    //check input
    if(array1.length===0){
        return array2;
    }
    if(array2.length===0){
        return array1;
    }
    while(array1Item || array2Item)
    {
        if(!array2Item || array1Item < array2Item)
        {
            mergedArrays.push(array1Item);
            array1Item=array1[i];
            i++

        }
        else
        {
           mergedArrays.push(array2Item);
           array2Item=array2[j];
           j++;
        }
    }


    return mergedArrays;
}
mergeSortedArrays([1,2,3,4],[5,6,7,8]);
