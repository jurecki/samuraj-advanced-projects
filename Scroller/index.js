document.addEventListener('DOMContentLoaded', function() {
   

    const rootElement = document.querySelector('#root');

    const sections = document.querySelectorAll('section');

    console.log('hello world', rootElement, sections)

    document.addEventListener('mousewheel', function(event) {
        console.log(event.wheelDelta)
    })

})
