class slider {
    constructor() {
        
        this.imagesContainer = document.querySelector('.slider__images-container');
        this.imgEl1 = document.querySelector('.slider__image-container--first img');
        this.imgEl2 = document.querySelector('.slider__image-container--second img');
        this.imageContainerE1 = document.querySelector('.slider__image-container--first');
        this.imageContaierE2 = document.querySelector('.slider__image-container--second');
        this.handleEl = document.querySelector('.slider__handle');
        this.dividerEl = document.querySelector('.slider__divider');

        
        
        this.resizeSlider();
        window.addEventListener('resize', () => this.resizeSlider())

        this.initEvents();
    }

    getOffset(clientX) {
        this.imagesContainerLeftOffset = this.imagesContainer.offsetLeft;

        const offset = clientX - this.imagesContainerLeftOffset;
    
        if (offset <0) {
            return 0;
        } else if (offset > this.imagesContainerWidth) {
            return this.imagesContainerWidth
        } else {
            return offset;
        }
    }

    move(clientX) {
        this.imagesContainerWidth = this.imagesContainer.offsetWidth;
        
        const offset = this.getOffset(clientX);
    
        const percent = (offset/this.imagesContainerWidth*100);
        console.log('percent', offset)
        this.dividerEl.style.left = `${percent}%`;
        this.imageContaierE2.style.width = `${percent}%`;
    }
    
    initEvents() {

        let dragging = false;

        this.handleEl.addEventListener('mousedown', () => {
            dragging = true;
            console.log('mousedown')
        });
    
        this.handleEl.addEventListener('mouseup', () => {
            dragging = false;
            console.log('mouseup')
        });
    
        this.handleEl.addEventListener('touchstart', () => {
            dragging = true;
        });
    
        this.handleEl.addEventListener('touchedend', () => {
            dragging = false;
        });
    
        window.addEventListener('mousemove', (e) => {
     
            if(dragging) {
                console.log('mouse move', e.clientX)
                this.move(e.clientX)
            }
        })
    
        window.addEventListener('touchmove', (e) => {
            if(dragging) {
                this.move(e.touches[0].clientX)
            }
        })
    }
    
    resizeSlider () {
        let imagesContainerWidth = this.imagesContainer.offsetWidth;
       
        this.imgEl1.style.width = imagesContainerWidth + "px";
        this.imgEl2.style.width = imagesContainerWidth + "px";


    }
}

export default slider;