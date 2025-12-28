// Events in JS
/**The change in the state of an object is known as an event 
 * Events are fired to notify code of "Intersting changes" that may affect code execution.

. Mouse events(click, double click etc)
. keyboard events(keypress, keyup, keydown)
. form events(submit etc)
print event & many more*/

// Event Handling in JS
// node.event = () => {
    // }

// Event Object: It is a special that has details about the event.
// All event handlers have access to the event objects properties and methods
//node.event = (e) => { (e: event)
    // }    
let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//};

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("you are inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

