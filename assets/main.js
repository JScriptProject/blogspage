
// Redirect with JavaScript: If you need redirects, include a small JavaScript snippet in the old .html files.

// window.location.href = "/new-path/";

// grab elements

const selectElement = selector => {
    const element = document.querySelector(selector);

    if(element) return element;
    throw new Error(`Something went wrong | Make sure the ${selector} is correct`)
};

// nav styles on scroll

const scrollHeader = () =>{
    const headerElement = selectElement("#header");
    if(this.scrollY >= 15){
     headerElement.classList.add("activated");
    }
    else{
     headerElement.classList.remove("activated");
    }
}

window.addEventListener("scroll", scrollHeader);
// open menu & search pop-up

const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () =>{
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
}

menuToggleIcon.addEventListener("click",toggleMenu);

// open /close search form popup

const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", ()=> searchFormContainer.classList.add("activated"));
formCloseBtn.addEventListener("click", ()=> searchFormContainer.classList.remove("activated"));


// close the seach form popup on ESC keypress


window.addEventListener("keyup", event=>{
    if(event.key ==="Escape") searchFormContainer.classList.remove("activated");
})


//switch theme/add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggler-btn");
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme)
{
    bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", ()=>
{
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }
    else
    {
        localStorage.setItem("currentTheme");
    }
});

// swiper

const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }, 
    pagination:{
        el: '.swiper-pagination'
    },
    breakpoints:{
        700:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 3
        }
    }
})

// copy code function

function copyCode() {
    // Select the text
    const codeSnippet = event.target.closest('.code-container').querySelector('.code-snippet code');
    
    // Create a range and selection
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();  // Clear any previous selections
    window.getSelection().addRange(range);  // Select the range
  
    // Execute the copy command
    try {
      document.execCommand('copy');
      alert('Code copied to clipboard!');
    } catch (err) {
      console.log('Unable to copy: ', err);
    }
    
    // Deselect the code
    window.getSelection().removeAllRanges();
  }