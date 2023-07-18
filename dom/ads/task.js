let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = rotatorCase.findIndex(n => n.classList.contains('rotator__case_active'));

let interval = setInterval(() => {
    // let intervalDif = rotatorCase[i].dataset.speed;
    // console.log(intervalDif)
    rotatorCase[i].classList.remove('rotator__case_active');
    i++

    if(i === rotatorCase.length){
        i = 0;
    }
    rotatorCase[i].style.color = rotatorCase[i].dataset.color
    rotatorCase[i].classList.add('rotator__case_active');

}, 1000);

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function delayedGreeting() {
//     console.log("Привет");
//     await sleep(2000);
//     console.log("мир");
//   }
  
//   delayedGreeting();
//   console.log("Пока");

// function sleep(ms) {
//     return new Promise(resolve => setInterval(resolve, ms));
//   }
  
//   async function interval() {
//   let intervalDif = rotatorCase[i].dataset.speed;

//     rotatorCase[i].classList.remove('rotator__case_active');
//     i++

//     if(i === rotatorCase.length){
//         i = 0;
//     }
//     rotatorCase[i].style.color = rotatorCase[i].dataset.color
//     rotatorCase[i].classList.add('rotator__case_active');

//     await sleep(1000);

//   }
  
//  interval();