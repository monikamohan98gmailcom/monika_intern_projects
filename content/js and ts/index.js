console.log(10);

(function(global){
    global.a=1000;
})(window)

// named function
function aa(args) {
    console.log('1st function')
}
aa("monika");
// named function
const b = function() {
   console.log('2nd function')
} // () => {}

//named function
const c =()=>{
    console.log('3rd function')
}

//nameless function
// const promise = new Promise();
// promise.then(namedfunction);
// promise.then((args) => {
//     console.log('call back nameless function')
// });


//IIFE(immediate invoking function expression)
(function () {
    var x = "Hello!!";  // I will invoke myself
    console.log(x);
  })();


  //date 
  setInterval(()=>{
      console.log(
          ` ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `
      )
  });