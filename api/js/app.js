import '../sass/style.scss';

class Dogo {
    constructor() {
         this.apiUrl = "https://dog.ceo/api";
         this.imgEl = document.querySelector('.featured-dog img')
         this.backgroundEl =  document.querySelector('.featured-dog__background')
         this.tilesEl = document.querySelector('.tiles');
         this.spinnerEl = document.querySelector('.spinner');
         this.init()
    }

    showLoading() {
        this.spinnerEl.classList.add('spinner--visible')
    }

    hideLoading() {
        this.spinnerEl.classList.remove('spinner--visible')
    }

    showImageWhenReady(src) {
      
        this.imgEl.setAttribute('src', src);
        this.backgroundEl.style.background=`url("${src}")`
        this.hideLoading()
   
}

    listBreeds() {
      return  fetch(`${this.apiUrl}/breeds/list/all`)
                 .then(resp => resp.json())
                 .then(data => data.message)
                 .catch(err => console.log(err))
    }
    
    
    getRandomImage() {
       return  fetch(`${this.apiUrl}/breeds/image/random`)
                 .then(resp => resp.json())
                 .then(data => data.message)
                 .catch(err=> console.log(err))
    }
    
    getRandomImageByBreed(breed) {
        return  fetch(`${this.apiUrl}/breed/${breed}/images/random`)
                    .then(resp => resp.json())
                    .then(data => data.message)
    }

    showAllBreeds() {
        this.listBreeds()
            .then(breeds => {
                for(const breed in breeds) {
                    if(breeds[breed].length==0) {
                        this.addBreed(breed)

                    } else {
                        for(const subBreed of breeds[breed]) {
                           this.addBreed(breed, subBreed)
                        }
                    }
                   
                }
            })
    }

    addBreed(breed, subBreed) {
        let name;
        let type;
        
        if(typeof subBreed === 'undefined') {
            name = breed;
            type = breed;
        } else {
            name = `${breed} ${subBreed}`;
            type = `${breed}`
        } 

        const tile = document.createElement('div');
        tile.classList.add('tiles__tile');
        const titleContent = document.createElement('div');
        titleContent.classList.add('tiles__tile-content');

        titleContent.innerText = name;
        titleContent.addEventListener('click', ()=> {
            window.scrollTo(0,0)
            this.showLoading()
            this.getRandomImageByBreed(type)
            .then((img) => this.showImageWhenReady(img))
        })

        tile.appendChild(titleContent);
        this.tilesEl.appendChild(tile)
    }



    init() {
        this.showLoading();
        this.getRandomImage()
            .then((img)=> this.showImageWhenReady(img))
       
        this.showAllBreeds();
    }   
}


new Dogo()

