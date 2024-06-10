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

topMenuEl.style.height = "100%";

topMenuEl.style.background = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  menuLinks.forEach((link) => {
    //Creat anchor element
    const aElement = document.createElement ("a");
    //Add Href
    aElement.href = link.href;
    // added text content
    aElement.textContent = link.text;
    // Append the new element to the topmenuEl element
    topMenuEl.appendChild(aElement);
  });
//PART 2
const submenuEl = document.querySelector("#sub-menu");

submenuEl.style.height = "100%" //Adding height to the sub menu

submenuEl.style.background = "var(--sub-menu-bg)"; // adding a bckground color to sub menu

submenuEl.classList.add ("flex-around"); // 

submenuEl.style.position = "absolute";

submenuEl.style.top ="0";

const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log(event.target.tagName);
    if (event.target.tagName !== "A") return;
});

// topMenuLinks.forEach(link =>{
//         if(link === event.target){
//             link.classList.toggle("active");
//         } else {
//             link.classList.remove("active");
//         }
//     });
const linkText = event.target.textContext.toLowercase();
const linkObject = menuLinks.find((link) => link.text === linkText);

if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    submenuEl.style.top = "0";
} else {
    document.querySelectorAll("#top-menu a").forEach((a) => a.classList.remove("active"));
    event.target.classList.add("active");
    if (linkObject.subLinks) {
      submenuEl.style.top = "100%";
      buildSubmenu (linkObject.subLinks);
    } else {
      submenuEl.style.top = "0";
    }

}
// });
