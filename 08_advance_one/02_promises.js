const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls . cryptography, network
    setTimeout(function(){
        console.log('Async task is complte');
        
    },1000)
})
promiseOne.then()