
    //promises - completed-resolved, failed-rejected
    let promise = new Promise((resolve, reject) => {
         //create a variable promise - going to take 1 parameter, parameter gets passed 2 variables: resolve&reject,  {}-definition fo fucntion inside    
         let sum = 1+1;
         if(sum === 2) { //RESOLVE - if sum is equal to 2
              resolve('Success')
         }else{
              reject('Failed')       //REJECT - we can pass anything we want
         }
    
    });
    
    promise.then((message) =>{
         //THEN - anythign inside then is going to run for/after resolve - takes a method(message)/parameter
         console.log('This is in the then after ' + message);
    }).catch((message) => {//CATCH - catch any errors for reject - called after reject
         console.log('This is in the catch after ' + message);
    });
    


    
    

















// const Promise = () => {

// //promises - completed-resolved, failed-rejected
// var promise = new Promise((resolve, reject) => {
//      //create a variable promise - going to take 1 parameter, parameter gets passed 2 variables: resolve&reject,  {}-definition fo fucntion inside    
//      let sum = 1+1;
//      if(sum === 2) { //RESOLVE - if sum is equal to 2
//           resolve('Success')
//      }else{
//           reject(Error("Promise Rejected"))       //REJECT - we can pass anything we want
//      }

// });

// promise.then(function(message) {
//      //THEN - anythign inside then is going to run for/after resolve - takes a method(message)/parameter
//      console.log('This is in the then' + message);
// }, errorMessage => {//CATCH - catch any errors for reject - called after reject
//      console.log('This is in the catch' + errorMessage);
// });

// }

// export default Promise;

