/* 
Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).
 
- Create a new h1 element
- Give is some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root
 */

const root = document.querySelector("div#root");
const headingOne = document.createElement("h1");
headingOne.textContent = "This is Heading One";
headingOne.classList.add("header");

root.appendChild(headingOne);
