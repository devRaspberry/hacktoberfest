const btn=document.querySelector('.talk');
const content=document.querySelector('.content');


const greetings=['Hi, welcome here','Hello, I am here for you', 'Hola boy'];
const corona=[ 'Under development'
];
const problems = ['Calm down, we will figure out it', 'Relax buddy'

];


const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

recognition.onstart= function(){
    console.log("I'm listening, speak up");
};

recognition.onresult=function(event){
    const current= event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click',()=>{

    recognition.start(); 
});


function readOutLoud(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text='Oops, Issue with the mic, please repeat';
    if(message.includes('Hey'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('hello'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('Hi'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('I am upset'))
    {
        const finalText=problems[Math.floor(Math.random()* problems.length)];
        speech.text=finalText;
    }
    if(message.includes('bot'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('akshat'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('corona'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('virus'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('rona'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('bolo na'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
  




    
    speech.volume=1;
    speech.rate=0.7;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

}