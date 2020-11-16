const spinner = document.querySelector('.v2');

const fps = 1000 / 60;
let deg = 0;
const degChange = 6; 

// const rotate = () => {
//   deg +=degChange;
//   spinner.style.transform = "rotate("+deg+"deg)" // rotate(30deg) 
//   setTimeout(rotate, fps)
// }

const rotate = () => {
  deg +=degChange;
  spinner.style.transform = "rotate("+deg+"deg)" // rotate(30deg)
  requestAnimationFrame(rotate) 
}

rotate();

