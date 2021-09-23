/* Canvas select in html document */
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

/* Canvas screen size */
const setUpCanvas = () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
};

/* Draw matrix Effect */
const drawMatrix = () => {
    const min = Math.min(canvas.height, canvas.width);
    const w = canvas.width;
    const h = canvas.height;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    /* Animation Matrix canvas */
    return setInterval (() => {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';
        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }, 80);
}

/* Reset animation matrix effect with resize screen */
const reset = (animationInterval) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    clearInterval(animationInterval);

    setUpCanvas();
    return drawMatrix();
}

/* get screen size */
setUpCanvas();

/* Animation interval with screen matrix effect */
let animationInterval = drawMatrix();
setInterval(80);

/* Event resize, start reset function */
window.addEventListener('resize', () =>{
    animationInterval = reset(animationInterval);
});