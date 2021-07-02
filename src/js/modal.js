// select the page wrapper
const page = document.querySelector('.page');

// select the gallery element
const gallery = document.querySelector('#gallery');

// selec the gallery list element
let galleryList = document.querySelector('#gallery .list');
console.log(galleryList);

// select the gallery item elements
let panels = galleryList.querySelectorAll('.items');
console.log(panels);

// select the modal element
let modal = document.querySelector('.modal');
// remove modal from view
modal.style.height = '0%'

// forEach [ panels ]
panels.forEach(element => {

    // click event [ panels ]
    element.addEventListener('click', ()=> {

        // select the preview image element
        let preview = element.querySelector('img');
        // test
        console.log(preview);

        // select the full image element
        let full = document.querySelector('.modal img');
        // apply preview source to full screen source
        full.src = preview.src;
        // test
        console.log(full);

        // select the description text
        let description = document.querySelector('.modal .text');
        // apply image alt as description text
        description.innerHTML = preview.alt;

        // apply padding to the modal element
        modal.style.padding = '10px';

        // append the modal element to the gallery element
        page.appendChild(modal);

        // apply width attribute to modal element
        modal.style.height = '100%';
    });
});

// select the [ exit ] button
let btn = document.querySelector('.modal .btn');

// click event [ btn ]
btn.addEventListener('click', ()=> {

    // validate modal width
    if (modal.style.height != '0%') {

        // apply default modal width
        modal.style.height = '0%';

        // remove modal padding
        modal.style.padding = '0px';
    }

});

