//hashtable input the data randomly not in order like array.
//sert something in hash table faster than array, do not need to go through every item
class HashTable{
    constructor(size){
        this.data = new Array(size);
//inside the hash table has array as each item
    }
    _hash(key){
        let hash = 0;
        for( let i = 0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i))*i % this.data.length;
        }
        return hash;
    }
    //create set function
    set(key,value){
        let address = this._hash(key);
        if (!this.data[address]){ //if the data not exist then push the new data into hashtable
            this.data[address] = []; //set the input = array 
            this.data[address].push([key,value]);//add into hashtable
            console.log(this.data);

        }
    }
    get(key){
        let address = this._hash(key); //get the key = address
        const currentBucket = this.data[address];
        //get the value instead of whole array item
        if(currentBucket.length){
            for(let i = 0; i< currentBucket.length; i++){
                if(currentBucket[i][0]=== key){
                    return currentBucket[i][1]
                    console.log(currentBucket[i][1]) // [i] index of first list/array, [1] item in array
                }
            }
        }
        return undefined;
    }
        //return undefined
    key(){
        const keyArray = [];
        for(let i= 0; i < this.data.length; i++ ){
            if(this.data[i]){ //if the data contains 
                keyArray.push(this.data[i][0][0]);
                console.log(this.data[i][0][0])
            }

        }
        return keyArray;
    }
}


const myhashtable = new HashTable(50);
// the length of hash table is 50
// myhashtable.set('grape', 10000);
// myhashtable.set('apples', 20000);
// myhashtable.get('grape');
// myhashtable.key()