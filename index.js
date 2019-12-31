const keys = document.querySelectorAll('.key');

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