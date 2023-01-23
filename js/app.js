/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//const List = document.getElementById("navbar__list");
//const sections = document.querySelectorAll("section");
const fragement = document.createDocumentFragment();
const sections=Array.from(document.querySelectorAll("section"));
const menu = document.getElementById('navbar_list');
let numberoflistitems = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//loop over section
function createlistitem() {
for (section of sections) {
    sectionName = section.getAttribute('data-nav');
    sectionlink = section.getAttribute('id');
    Listitem = document.createElement('li');
    listitem.innerHTML ='<a class='menu__link' href ='#${sectionlink}>${sectionName}<a/>';
    menu.appendChild(listitem);

}

}
function sectioinviewport (elem){
    let sectionpos = elem.getBoundingclientrect();
    return(sectionpos>= 0);
}
sections.forEach(section => {
    //section id and section data-nav attribute
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const ListItem = document.createElement("li");
    const ListLink = document.createElement("a");
    //add href ,title ,and class attribute for link
    ListLink.href = `#${sectionId}`;
    ListLink.textContent = sectionTitle;
    ListLink.classList.add("menu__link");
    //add smooth scroll to anchors
    ListLink.addEventListener("click", evt => {
        evt.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
    ListItem.appendChild(ListLink);
    fragement.appendChild(ListItem);
})
List.appendChild(fragement);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
const links = document.querySelectorAll("a.menu__link");
const callback = (entries) => {
    let section = entries[0];
    section.target.classList.remove("your-active-class");
    if (section.isIntersecting) {
        section.target.classList.add("your-active-class");
        links.forEach(link => {
            if (link.textContent === section.target.dataset.nav) {
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        })
    } else {
        section.target.classList.remove("your-active-class");
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3

    }
}
const observer = new IntersectionObserver(callback, options)

// Build menu 

// Scroll to section on link click
window.addEventListener("scroll", evt => {
    sections.forEach(section => {
        observer.observe(section);
    })
})

// Set sections as active

window.addEventListener("scroll", evt => {
    sections.forEach(section => {
        observer.observe(section);
    })
})

