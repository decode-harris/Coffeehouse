let nav = document.querySelector('#nav');
nav.style.width = '0%';


// nav button [ menu ] selector
let menu = document.querySelector('#menu');
let icon = document.querySelector('#menu i');

// click event [ button menu ]
menu.addEventListener('click', ()=> {

    // validate [ nav ] display props
    if (nav.style.width != '100%') {
        // assign a new width value [ 100 % ]
        nav.style.width = '100%';

        // change menu icon to [ x ]
        icon.className = 'fas fa-times';

        // test [ validation ]
        console.log('menu : active');
    }
    else {
        // revert to default
        nav.style.width = '0%';

        // change menu icon to [ bars ]
        icon.className = 'fas fa-bars';

        // test [ default ]
        console.log('menu : default');
    }
});

let items = document.querySelectorAll('#nav .items');

// forEach [ items ]
items.forEach(element => {

    // click event [ items ]
    element.addEventListener('click', ()=> {

        // validate [ nav ] property width
        if (nav.style.width != '0%') {

            // assign nav property width to default [ 0% ]
            nav.style.width = '0%';

            // change menu icon to [ bars ]
            icon.className = 'fas fa-bars';

        }

    });
});
