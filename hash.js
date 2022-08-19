class HashTable{

    constructor(size)
    {
        this.data=new Array(size);
    }

//loop over the string of the array
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++)
        {
            hash=(hash+key.charCodeAt(i)*i)% this.data.length
        }
        return hash;
    }
    //receive the keys and values of the array
    set(key,value)
    {
        // store the address in memory
        let address=this._hash(key);

        // if the index doesnt exists in memory push new key and value;

        if(!this.data[address])
        {
            this.data[address]=[];
        }
            this.data[address].push([key,value])
            return this.data
    }

        // return values
        get(key)
        {
            let address=this._hash(key);
            const currentBucket=this.data[address];
            console.log(currentBucket)
            if(currentBucket)
            {
                for(let i=0;i<currentBucket.length;i++)
                {
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1]

                    }
                }
            }
           return undefined

        }
        //loop over the keys
        keys()
        {
            const keysArray=[];
            for(let i=0; i<this.data.length;i++)
            {
                if(this.data[i])
                {
                    // console.log(this.data[i][0][0])
                    keysArray.push(this.data[i][0][0])
                }
            }
            return keysArray;


        }


  }

  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('apples', 9)
  myHashTable.set('oranges', 2)
  myHashTable.keys()