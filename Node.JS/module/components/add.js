const add = (...numbers) => {
    
   return numbers.reduce((sum, value)=> sum + value)
}

module.exports = add;