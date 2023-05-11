// JS/Node offloads asynchronous processes to the browser/kernel to allow multiple threading or non-blocking

 console.log('First task: runs first');
 console.log('################')
 setTimeout(() => {
  console.log('async process is offloaded and callback is called after all other processes')
 }, 0)
 console.log('Next task: starts running as soon as the above function is offloaded and executes before the above async function\'s callbacks is called');
 console.log('#####################')


 //example 2
 console.log('2 First task: runs first');
 console.log('################')
 setInterval(() => {
  console.log('async process is offloaded and callback is called after all other processes')
 }, 1000)
 console.log('Next task: starts running as soon as the above function is offloaded and executes before the above async function\'s callbacks is called');
 console.log('#####################')