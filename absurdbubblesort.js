readline = require('readline')
reader = readline.createInterface(process.stdin, process.stdout)




function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} Greater than ${el2}`, (answer) => {
            if (answer === "yes"){
                callback(true);
            } else if(answer === "no") {
                callback(false); 
            }
    })
}

//askIfGreaterThan(1, 2, answer => console.log(`Answer: ${answer}`))
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    if(i === arr.length - 1){
        outerBubbleSortLoop(madeAnySwaps)
        console.log(arr)
    } else {
        //askIfGreaterThan(arr[i], arr[i + 1], function(){
        let response = askIfGreaterThan(arr[i], arr[i + 1], callback);
        if (response){
           let temp = arr[i];
           arr[i] = arr[i+1];
           arr[i+1] = temp;
           madeAnySwaps = true;
    }}
        //let newIndex = i++;
        //console.log(newIndex)
        // console.log(arr)
        // innerBubbleSortLoop(arr, newIndex, madeAnySwaps, outerBubbleSortLoop);

   // console.log(arr);
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps){
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        }else {
            sortCompletionCallback(arr);
        }
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true);
}

function sortCompletionCallback(arr){
    console.log(arr);
}

let array = [1, 3, 5, 2, 8, 7];
innerBubbleSortLoop(array, 0, false)