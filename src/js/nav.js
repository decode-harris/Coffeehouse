let nav = document.querySelector('#nav');
nav.style.width = '0%';


// nav button [ menu ] selector
let menu = document.querySelector('#menu');

// click event [ button menu ]
menu.addEventListener('click', ()=> {

    // validate [ nav ] display props
    if (nav.style.width != '100%') {
        // assign a new width value [ 100 % ]
        nav.style.width = '100%';

        menu.innerHTML = 'x';
        // test [ validation ]
        console.log('menu : active');
    }
    else {
        // revert to default
        nav.style.width = '0%';

        menu.innerHTML = 'x';

        // test [ default ]
        console.log('menu : default');
    }
});