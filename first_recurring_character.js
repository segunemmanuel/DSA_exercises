//this is an implemenmtation of an hash function
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//1st approach
function firstRecurringCharacter(input)
{
    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1; j<input.length; j++){
            if(map[input[i]]!== undefined){
                return input[i];
            }else{
                map[input[i]]=true;
            }
        }
    }
    return undefined
} //o(n2)

//2nd approach using hash tables

function firstRecurringCharactersUsingHashFunctions(input)
{
    //loop over the keys
    let map={};
    for(let i=0; i<input.length; i++)
    {
        if(map[input[i]]!==undefined)
        {
            return input[i];
        }
        else{
            map[input[i]]=true;
        }
    }
    return undefined
}

// console.log(firstRecurringCharacter([1,2,3,5,1]));
console.log(firstRecurringCharactersUsingHashFunctions([2,5,1,2,3,5,1,2,4]));
