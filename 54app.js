//Fetch API(Application programming interface).
// The fetch API provides an interface for fetching (sending/receiving) resources.
/* It uses request & response objects.
the fetch() method is used to fetch a resource (data).
let promise = fetch(url,[option])*/

// Understanding terms
/* AJAX is Asynchronous JS & XML)
JSON is JS object notation 
 json()method: returns a second promise that resolves with the result of parsing the response body as JSON.(input is JSon, output is JS object)*/


 
const URL = "https://alexwohlbruck.github.io/cat-facts/";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[2].text;

};
btn.addEventListener("click", getFacts);
