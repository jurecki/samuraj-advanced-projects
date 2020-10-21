document.addEventListener('DOMContentLoaded', function() {

    const animBg = new AnimBg('.anim-bg');

   
    document.addEventListener('mousemove', (e) => animBg.listenCursorMove(e))

})