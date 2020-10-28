import '../sass/style.scss';

class Dogo {
    constructor() {
         this.apiUrl = "https://dog.ceo/api/breeds/";
         this.imgEl = document.querySelector('.featured-dog img')
         this.backgroundEl =  document.querySelector('.featured-dog__background')
         this.init()
    }

    listBreads() {
      return  fetch(`${this.apiUrl}list/all`)
                 .then(resp => resp.json())
                 .then(data => data.message)
                 .catch(err => console.log(err))
    }
    
    
    getRandomImage() {
       return  fetch(`${this.apiUrl}image/random`)
                 .then(resp => resp.json())
                 .then(data => data.message)
                 .catch(err=> console.log(err))
    }
    
    getRandomImageByBreed(breed) {
        return  fetch(`${this.apiUrl}${breed}/images`)
                    .then(resp => resp.json())
                    .then(data => data.message)
    }

    init() {
        this.getRandomImage()
            .then(src => {
                this.imgEl.setAttribute('src', src);
                this.backgroundEl.style.backgroundImage = `url("${src}")`
            })
       
        this.listBreads()
            .then(data => console.log('data', data))
    }   
}


new Dogo()

