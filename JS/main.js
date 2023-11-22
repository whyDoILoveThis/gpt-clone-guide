



const h2 = document.querySelectorAll('h2');
h2.forEach(item => {
    const h2UnderlineWrap = document.createElement('div');
h2UnderlineWrap.classList.add('h2-underline-wrap');
const h2UderlineDot1 = document.createElement('img');
const h2UderlineDot2 = document.createElement('img');
h2UderlineDot1.src = '/img/h2UnderlineDot.png';
h2UderlineDot1.classList.add('h2-underline-dot');
h2UderlineDot2.src = '/img/h2UnderlineDot.png';
h2UderlineDot2.classList.add('h2-underline-dot');

const h2Underline = document.createElement('div');
h2Underline.classList.add('h2-underline');

h2UnderlineWrap.appendChild(h2UderlineDot1);
h2UnderlineWrap.appendChild(h2Underline);
h2UnderlineWrap.appendChild(h2UderlineDot2);
    item.appendChild(h2UnderlineWrap);
})


const content = document.querySelector(".content");


const copyright = document.createElement("p");
copyright.classList.add("copyright");

content.appendChild(copyright);








// Check the current page's filename
const currentFilename = window.location.pathname.split('/').pop();
if (currentFilename !== 'index.html' && currentFilename !== 'getting-started-ui-setup.html' && currentFilename !== 'backend-with-node-js.html') {
    createCollapsibleStructure();
}

// Define a function to create the collapsible structure
function createCollapsibleStructure() {
  // Create the container for the dynamically generated structure
  const container = document.createElement('div');
  container.classList.add('centerer');

  // Create the collapsible section
  const collapsible = document.createElement('div');
  collapsible.classList.add('collapsible', 'sections-collapsible');

  // Create the collapsible heading
  const heading = document.createElement('h4');
  heading.classList.add('sections-heading', 'collapsible__heading','nav__topic');
  heading.textContent = '';

  // Create the icon for collapsing/expanding
  const icon = document.createElement('img');
  icon.src = '../../img/icons/icon--menu.png';
  icon.alt = '';
  icon.classList.add('sections-icon', 'collapsible__button');
  heading.appendChild(icon);

  icon.addEventListener('click', () => {
    const backBtn = document.querySelector('.back-icon-wrap');
    const toTopBtn = document.querySelector('.to-top-btn');
    const toBtmBtn = document.querySelector('.to-bottom-btn');
    if(!collapsible.classList.contains('collapsible--expanded')){ 
      icon.src = '../../img/icons/icon--close.png'
      icon.classList.add('close-btn');
   backBtn.style.opacity = '0';
   toTopBtn.style.opacity = '0';
   toBtmBtn.style.opacity = '0';
  
} else {
        icon.src = '../../img/icons/icon--menu.png';
       backBtn.style.opacity = '1';
       toTopBtn.style.opacity = '1';
       toBtmBtn.style.opacity = '1';
        icon.classList.remove('close-btn');
    }
  })

  // Create the collapsible content
  const content = document.createElement('div');
  content.classList.add('collapsible__content');

  // Create an ordered list
  const orderedList = document.createElement('ol');
  orderedList.classList.add('section-list');

  // Get all existing h2 elements
  const h2Elements = document.querySelectorAll('h2');

  // Iterate through the h2 elements and generate anchor elements
  h2Elements.forEach((h2) => {
    h2.id = h2.textContent.replace(/\s+/g, '');
      const listItem = document.createElement('li');
      listItem.classList.add('section-item');
      listItem.classList.add('section-item--main');

      const anchor = document.createElement('a');
      anchor.textContent = h2.textContent;
      anchor.href = `#${h2.textContent.replace(/\s+/g, '')}`;

      listItem.appendChild(anchor);
      orderedList.appendChild(listItem);
  });

  // Append elements to build the structure
  content.appendChild(orderedList);
  collapsible.appendChild(heading);
  collapsible.appendChild(content);
  container.appendChild(collapsible);

  // Find a target element where you want to insert the structure
  // For example, you can use document.body to add it to the body of the page
  const targetElement = document.querySelector('.main-wrap');

  // Insert the structure into the target element
  targetElement.appendChild(container);
}












const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const collapseBtn = collapsible.querySelector(".collapsible__button");
  
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function() {
      collapsible.classList.toggle("collapsible--expanded");

     
    });
  }
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const expandButton = card.querySelector('.collapsible--expanded');

  if (expandButton) {
    card.classList.add('card--has-expandable');
  }
});

const mainWrap = document.querySelector('.main-wrap');
const toTopIcon = document.createElement("img");
const toTopLink = document.createElement("a");
const theTopOfPage = document.createElement('span');
const h1 = document.querySelector('h1');
toTopIcon.src = "../../img/icons/icon--back.PNG";

const toBottomIcon = document.createElement("img");
const toBottomLink = document.createElement("a");
const theBottomOfPage = document.createElement('span');
toBottomIcon.src = "../../img/icons/icon--back.PNG";

if (currentFilename !== 'index.html' && currentFilename !== 'getting-started-ui-setup.html' && currentFilename !== 'backend-with-node-js.html') {
// JUMP-TO-TOP BUTTON
theTopOfPage.id = "top"
h1.appendChild(theTopOfPage);
toTopLink.href = "#top";
toTopIcon.classList.add("to-top-btn");
toTopIcon.classList.add('icon');
toTopLink.classList.add('icon-wrap');
mainWrap.appendChild(toTopLink);
toTopLink.appendChild(toTopIcon);

// JUMP-TO-BOTTOM BUTTON
theBottomOfPage.id = "bottom"
content.appendChild(theBottomOfPage);
toBottomLink.href = "#bottom";
toBottomIcon.classList.add("to-bottom-btn");
toBottomIcon.classList.add('icon');
toBottomLink.classList.add('icon-wrap');
mainWrap.appendChild(toBottomLink);
toBottomLink.appendChild(toBottomIcon);

}
