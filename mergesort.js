// Given 2 sorted arrays merge the 2 into a single big array

// Solution 1

function mergeSortedArrays(array1,array2){

    const mergedArray= [];
  let array1Item =array1[0];
    let array2Item=array2[0];
  let i=1;
  let j=1;
   
    while(array1Item || array2Item) {
      // console.log(array1Item,array2Item);
      if(!array2Item ||  array1Item < array2Item){
        mergedArray.push(array1Item)
        array1Item=array1[i];
        i++;
      }
      else{
        mergedArray.push(array2Item);
            array2Item=array2[j];
        j++;
      
    }
    }
    return mergedArray;
    
  }
  mergeSortedArrays([0,3,4,31],[4,6,30]);
  