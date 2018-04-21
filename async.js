/**
 * This is because functions in JavaScript are asynchronous.
 * Each function gets executed in order, but each one is independent with it’s own setTimeout.
 */

function printString(name) {
    setTimeout(
        () => console.log(name),
        Math.floor(Math.random() * 100 + 1)
    );
}

function printAll() {
    printString('jema');
    printString('ethan');
    printString('bonja');
    printString('jimens');
}

// console.log('Print async function with timeout');
// printAll();

/**
 * Callbacks example:
 *     A callback is a function that is passed to another function.
 *     When the first function is done, it will run the second function.
 */

 function printStringWithCallback(name, callback) {
    setTimeout(
        () => {
            console.log(name),
            callback()
        },
        Math.floor(Math.random() * 100 + 1)
    )
 }

 function printAllWithCallback() {
    printStringWithCallback('jema', () => {
        printStringWithCallback('ethan', () => {
            printStringWithCallback('bonja', () => {
                printStringWithCallback('jimens', () => {})    
            })
        })        
    });
}

// console.log('Print async function with callback');
// printAllWithCallback();

function printStringPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(name)
                resolve();
            },
            Math.floor(Math.random() * 100 + 1)
        )
    })
}

function printAllPromise() {
    printStringPromise('jema')
        .then(() => printStringPromise('ethan')
        .then(() => printStringPromise('bonja'))
        .then(() => printStringPromise('jimens'))
        .catch(err =>console.log(err))
    )
}

// printAllPromise();

// async and await
async function printAllPromiseAsync() {
    await printStringPromise('jema');
    await printStringPromise('ethan');
    await printStringPromise('bonja');
    await printStringPromise('jimens');
}

// printAllPromiseAsync();

function concatenateString(prev, current) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(prev + ' ' + current)
            },
            Math.floor(Math.random() * 100 + 1)
        );
    })
}

async function printAllConcatenatedString() {
    let result = ''; 
    result = await concatenateString(result, 'jema');
    result = await concatenateString(result, 'ethan');
    result = await concatenateString(result, 'bonja');
    result = await concatenateString(result, 'jimens');
    console.log(result);
}

printAllConcatenatedString();