const { readFileSync, writeFileSync } = require('fs')

const text = readFileSync('../content/hello.txt', 'utf-8')

writeFileSync('../content/created.txt', 'This will create a new file or modify an existing one')