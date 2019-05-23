const play = document.querySelector('.playbtn');
const pause = document.querySelector('.pausebtn');
const reset = document.querySelector('.resetbtn');
const bpm = document.querySelector('tone-slider');

play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
reset.addEventListener('click', reLoad);

bpm.addEventListener('change', e => Tone.Transport.bpm.value = e.detail)

function playAudio() {
    drummer();
    play.disabled = true;
}

function pauseAudio() {
    play.disabled = false;
    Tone.Transport.cancel(); 
    pause.cancel(); 
}

function reLoad() {
    location.href = 'http://jamesjcapps.com/drum_machine';
}

function drummer() {
    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-noise.wav").toMaster();
    const hihat = new Tone.Player("./drums/hihat-plain.wav").toMaster();
    let index = 0;            

    Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.Transport.start();
    
    function repeat() {
        let step = index % 8;
        let kickInputs = document.querySelector(
            `.kick input:nth-child(${step + 1})`
        );
        let snareInputs = document.querySelector(
            `.snare input:nth-child(${step + 1})`
        );
        let hihatInputs = document.querySelector(
            `.hihat input:nth-child(${step + 1})`
        );
        if(kickInputs.checked) {
            kick.start();
        }
        if(snareInputs.checked) {
            snare.start();
        }
        if(hihatInputs.checked) {
            hihat.start();
        }
        index++;
    }
    
}







