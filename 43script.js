// Event Listeners
/**node.addEventListener(event, callback)
 * node.removeEventListener(event, callback)
 * Note: the callback reference should be same to remove*/

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler1");
    
});
const handler1 = () => {
    console.log("button1 was clicked - handler1");
}

btn1.removeEventListener("click", ( )=>{
    console.log("button1 was clicked - handler1");
});