const EventEmitter = require("events");
const emitter = new EventEmitter();
setInterval(() => {
    emitter.emit("timer", "hi there");
}, 2000);
emitter.on("timer", (msg) => console.log(msg));


// Emit "counter" event
let count = 0;
setInterval(() => {
    emitter.emit("counter", count);
    count++;
}, 1000);
emitter.on("counter", (number) => {
    console.log("Counter:", number);
});  

// Emit "countdown" event
let countD = 60;

const countdown = setInterval(() => {
    emitter.emit("countdown", countD);
    countD--;
    if (countD === 0) {
        clearInterval(countdown);
    }
}, 1000);

emitter.on("countdown", (number) => {
    console.log("Countdown:", number);
});

