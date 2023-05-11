const { readFile, writeFile } = require('fs')

// console.log('first task');

// readFile('../content/hello.txt', 'utf-8', (err, res) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('did the first read')
//   console.log('##############');
//   const result = res
//   writeFile('../content/created.txt', `Previous text: ${result}`, {flag: 'a'}, (err, res) => {
//     if(err) {
//       console.log(err)
//       return
//     }
//     console.log('did the first write');
//     console.log('###################');
//     readFile('../content/created.txt', 'utf-8', (err, res) => {
//       if(err) {
//         console.log(err)
//         return
//       }
//       console.log('did the second read');
//       console.log(res)
//       console.log('#############');
//     })
//   })
// })
// console.log('next task');
// console.log('############');


// USING PROMISES 
const { readFile, writeFile } = require('fs').promises

const start = async () => {
try {
  const text = await readFile('./content/hello.txt', 'utf-8')
  console.log(text);
  //run any other processes
  await writeFile('./content/result.txt', `This is new: ${text}`)
} catch (err) {
  console.log(err); 
}
}

console.log('start')
start()
console.log('next task begin')