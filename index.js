const keys = document.querySelectorAll('.key');
const WHITEKEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACKKEYS = ['s','d','g','h','j'];
const whiteKey =document.querySelectorAll('.key.white')
const blackKey = document.querySelectorAll('.key.black');    
keys.forEach(key => {
    key.addEventListener('click', () => playNode(key));
})

document.addEventListener('keypress', e => {
    const key = e.key;
    const whiteKeyIndex = WHITEKEYS.indexOf(key);
    const blackKeyIndex = BLACKKEYS.indexOf(key);
    if (whiteKeyIndex > -1) playNode(whiteKey[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNode(blackKey[blackKeyIndex]);
});

const playNode = (key)=>{
    const nodeAudio = document.getElementById(key.dataset.node);
    nodeAudio.currentTime = 0;
    nodeAudio.play();
    key.classList.add('active');

    nodeAudio.addEventListener('ended', () => {
        key.classList.remove('active');
   
    })
}