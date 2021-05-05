// set observer options
let options = {

    root: null,
    threshold: 0.25,  // set a visual threshold for content [ 100% visible ]
    rootMargin: '-10px'  // set a root margin for content [ 0px ]

}

const main = document.querySelector('.main');
const nav = document.querySelector('.nav');
const about = document.querySelector('#about');


const main_observer = new IntersectionObserver(function(entries, main_observer) {

    // forEach [ entries ]
    entries.forEach(entry => {

        // validate if element is intersecting
        if(!entry.isIntersecting) {

            // remove nav-scrolled css class from element
            nav.classList.remove('nav-scrolled');

            main_observer.observe(about);

            // test
            console.log(entry.target);
        }
        else {

            // add nav-scrolled css class to element
            nav.classList.add('nav-scrolled');

            // remove main observer from about section after init
            main_observer.unobserve(about);

            // test
            console.log(entry.target);
        }
    });

}, options);

main_observer.observe(about);


const about_observer = new IntersectionObserver(function(entries, about_observer) {
    
    // forEach [ entries ]
    entries.forEach(entry => {

        // validate if element is intersecting
        if (!entry.isIntersecting) {

            // add section-scrolled css class to element
            about.classList.add('section-scrolled');
        }
        else {
            // remove section-scrolled css class from element
            about.classList.remove('section-scrolled');
        }
    });
},
options);


about_observer.observe(about);