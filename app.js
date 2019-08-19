const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greet = [
    'Greetings, you idiot',
    'Get out! I don\'t want to talk.',
    'What the heck, please go to hell'
]

/* const angry = [
    'Shut up',
    'Oh damn you !!',
    'Oh my god, leave me alone'
] */

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Tell me something!');
}


// recognition.onspeechend = function() {
//     console.log('stopped talking!');
// }

recognition.onresult = function(e) {
    console.log("onresult!");
    // console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content.textContent = transcript;
    read_it(transcript);
}

btn.addEventListener('click', () => {
    recognition.start()
});


const read_it = function(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I cannot understand you! You are a fool';

    if (message.includes('how are you')) {
        speech.text = greet[Math.floor(Math.random() * greet.length)];
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}