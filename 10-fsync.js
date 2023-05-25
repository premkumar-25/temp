const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./contents/subfolder/first.txt','utf-8')
const second =readFileSync('./contents/subfolder/second.txt','utf-8')

// console.log(first,second)

writeFileSync('./contents/subfolder/result-sync.txt',`result is ${first},${second }`)