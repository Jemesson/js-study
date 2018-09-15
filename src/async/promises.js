function timeout(duration = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    console.log("then");
    throw new Error("hmm");
}).catch(err => {
    console.log(err);
    return Promise.all([timeout(100), timeout(200)]);
})
