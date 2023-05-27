// Adds bird animation using vanta.js
VANTA.BIRDS({
    el: ".introduction",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xffffff
})


// color changing background
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


// async function rainbow() {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     const delay = 1000;

//     while (true) {
//         for (const color of colors) {
//             await delayedColorChange(color, delay);
//         }
//     }
// }

// rainbow()
