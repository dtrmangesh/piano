const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
});
    
keys.forEach(key => {
    key.addEventListener('click', () => playNode(key));
})


const playNode = (key)=>{
    const nodeAudio = document.getElementById(key.dataset.node);
    nodeAudio.currentTime = 0;
    nodeAudio.play();
    key.classList.add('active');

    nodeAudio.addEventListener('ended', () => {
        key.classList.remove('active');
   
    })
}