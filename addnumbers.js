readline = require('readline')
reader = readline.createInterface(process.stdin, process.stdout)

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0){
        completionCallback(sum)
    } 

    else {
        reader.question('Number?', (userOutput) => {
            num = parseInt(userOutput)
            sum += num
            numsLeft -= 1
            console.log(sum)
            addNumbers(sum, numsLeft, completionCallback)
        })
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));