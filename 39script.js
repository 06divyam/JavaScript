// DOM Manipulation
// Insert elements -> let el = document.createElement("div")
/** 1. node.append(el) adds at the end of node (inside)
 * 2. node.prepend(el) adds at the start of node (inside)
 * 3. node.before(el) adds before the node (outside)
 * 4. node.after(el) adds after the node(outside)*/

//Delete element
// node.remove() removes the node

// append chile:The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.

//remove child: The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.


let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);