const multiply = (...numbers) => {
    
    return numbers.reduce((sum, value)=> sum * value)
 }
 
 module.exports = multiply;