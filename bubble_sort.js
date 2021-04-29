
// bubble sort implement
const bubbleSort = (arr) => {
    for(let i = 0 ; i<arr.length; i++){
        for(let j = 0 ; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp ;
            }
        }
    }
    return arr ;
}

const sortedArray = bubbleSort([4,29,1,2,30]);
console.log(sortedArray);



// searching

const searching = (value, arr) => {
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === value){
            return 'Got the expected value.'
            break ;
        }else{
            return 'Sorry not found!';
            break ;
        }
    }
}

const result = searching('abc', ['ppc','dfdr','abc','ee']);
console.log(result);

