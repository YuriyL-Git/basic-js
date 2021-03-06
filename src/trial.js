let res = this.chain.split(' )~~( ')
if (typeof value === 'undefined') value = ' '

res.push(value.toString())

this.chain = res.join(' )~~( ')