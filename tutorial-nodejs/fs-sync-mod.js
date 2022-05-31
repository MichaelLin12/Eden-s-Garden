const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync(`./content/first.txt`,'utf8')
const second = readFileSync(`${__dirname}/content/second.txt`,'utf8')

console.log(first,second)

//create specified file if none otherwise overwrite existing file contents
writeFileSync(`${__dirname}/content/result.txt`, `Here is the result of first:${first} and the result of second:${second}`)

writeFileSync(`${__dirname}/content/result.txt`, `Here is the result of first:${first} and the result of second:${second}`,{flag:'a'})//upend to existing file