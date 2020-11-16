const ball = document.querySelector('.ball');
const btn = document.querySelector('.btn-action');
const spring = document.querySelector('.spring');
const fill = document.querySelector('.fill');

const strechSpring = () => {
    fill.style.animationName= 'fill';
    spring.style.animationPlayState = 'running';
    fill.style.animationPlayState = 'running';
    btn.textContent = 'Pusc sprezyne'
}


const releseSpring = () => {
    console.log ('pusc')
    const fillStyles = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyles.width,10);
    const barWidth = parseInt(getComputedStyle(document.querySelector('.bar')).width,10);
    const progressPercent = (fillWidth/barWidth).toFixed(2);

    btn.textContent = `Moc uderzenia to ${(progressPercent*100).toFixed(2)}%`
    console.log(progressPercent)
    document.documentElement.style.setProperty('--power-x',`${30+ progressPercent*100}%`);
    ball.style.animation = 'fly-ball-x 1s 1 forwards .15s cubic-bezier(.05, .98, .21, .9), fly-ball-y 1s 1 forwards linear';
    
    document.documentElement.style.setProperty('--spring-left', getComputedStyle(spring).left)
    
    spring.style.animation = 'release-spring .5s forwards linear'

    fill.style.animationPlayState = 'paused';
    //zablokownie kliknięcia

    btn.removeEventListener('mousedown', strechSpring);
    btn.removeEventListener('touchstart', strechSpring);

    ball.addEventListener('animationend', resetAnimation);
}   

const resetAnimation = () => {
    console.log('reset animation')
    setTimeout(()=>{
        btn.addEventListener('mousedown', strechSpring);
        btn.addEventListener('mouseup', releseSpring);
        btn.addEventListener('touchstart', strechSpring);
        btn.addEventListener('touchend', releseSpring);
    
        btn.style.color = 'white';
        btn.textContent = 'naciagnij sprezyne'

        spring.style.animation = "";
        ball.style.animation = "";

        fill.style.animationName= 'none';

    } ,2000)
   

    ball.removeEventListener('animationend', resetAnimation)

}

btn.addEventListener('mousedown', strechSpring);
btn.addEventListener('mouseup', releseSpring);
btn.addEventListener('touchstart', strechSpring);
btn.addEventListener('touchend', releseSpring);