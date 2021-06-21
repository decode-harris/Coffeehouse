const nav = document.querySelector('#nav .list');
nav.style.width = '0%';


// const more = document.querySelector('#more');
// more.style.display = 'none';

const btn_more = document.querySelector('#button-more');
btn_more.addEventListener('click', ()=> {

    if (more.style.display === 'none') {

        more.style.display = 'block';
        btn_more.innerHTML = 'less';
    }
    else {
        more.style.display = 'none';
        btn_more.innerHTML = 'more';
    }
    
});

// navigation button selector [ nav-button ]
const button_menu = document.querySelector('#button-menu');

// click event [ button menu ]
button_menu.addEventListener('click', ()=> {

    // validate [ nav ] display props
    if (nav.style.width != '100%') {

        // assign new [ active ] ID to nav list
        nav.setAttribute('id', 'active');
        // assign a new width value [ 100 % ]
        nav.style.width = '100%';
    
    }
    else {
        // revert ID back to default [ empty string ]
        nav.setAttribute('id', '');
        // revert to default
        nav.style.width = '0%';
    }

});