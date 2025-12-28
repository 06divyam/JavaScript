//4. Query Selector
// document.querySelector("myId / myClass /tag")
// return first element  

/**Properties
 * 1. tagName: returns tag for element nodes
 * 2. innerText: returns the text content of the element and all its children 
 * 3. innerHTML: returns the plain text or html contents in the element
 * 4. textContent: returns textual content even for hidden elements
 * firstChild: The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children
 *  
 */
let firstEl = document.querySelector("p"); // 1st element chaiye tb querySelector use karenge
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // all element chaiye tb querySelectorAll use karenge 
console.dir(allEl);