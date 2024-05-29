const mainEl = document.querySelector('main');
mainEl.style.background = 'var(--main-bg)'; // setting the background color using our var method to grab an item from the root

console.log(mainEl);
//Creating an HTML Element
let heading = document.createElement("h1");
heading.innerText="DOM MANIPULATION"; // attaching text to our h1 we created
mainEl.appendChild(heading);// appending my h1 i created to my main container
console.log (heading);

// add a class name to a html element
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

//set the height to 100%

topMenuEl.style.height = "100%"

topMenuEl.style.background = "var(--top-menu-bg)";