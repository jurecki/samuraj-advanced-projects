fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
    .then((res)=>res.json())
    .then(booksInfo => console.log(booksInfo))
    .catch(err=> console.log('Niestety błąd'))