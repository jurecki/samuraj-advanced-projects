class Scroller {
    constructor(rootSeleector) {
        const rootElement = document.querySelector(rootSeleector);
        this.sections = [...document.querySelectorAll('section')];
        const currentSectionIndex = this.sections.findIndex(element=> this.isScrolledIntoView(element))


        this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
        
        this.isThrottled = false; 
    
        this.isScrolledIntoView(this.sections[0])
    }

    isScrolledIntoView(element) {
        const rect = element.getBoundingClientRect();
        const elemTop = Math.floor(rect.top);
        const elemBottom = Math.floor(rect.bottom);

        const isVisibble = (elemTop>=0) && (elemBottom<=window.innerHeight)

       return isVisibble;
    }

    listenScroll = (event) => {
        if(this.isThrottled) return;

        this.isThrottled = true;
        
        setTimeout(() => {
           this.isThrottled = false;
        },600)
        
        const direction = event.wheelDelta < 0 ? 1 : -1;
        
        this.scroll(direction);

    }

    scroll = (direction) =>{
     
        if(direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length-1;

            if (isLastSection) return
        }
       
         if (direction ===-1) {
                const isFirstSection = this.currentSectionIndex === 0;
                if(isFirstSection) return
            }
        

        this.currentSectionIndex += direction;

        this.scrollToCurrentSection(); 
    }

    scrollToCurrentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    
}