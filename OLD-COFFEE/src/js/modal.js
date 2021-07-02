const modal = document.querySelector('.modal');

modal.style.display = 'none';
console.log('modal : display = none');

let buttons = document.querySelectorAll('.modal-btn');

buttons.forEach(element => {
    element.addEventListener('click', ()=> {

        modal.style.display = 'flex';

        if ( element.id === 'link-info') {
            // test
            console.log('link : ' + element.id);
        }
        if ( element.id === 'link-menu') {
            // test
            console.log('link : ' + element.id);
        }
        if ( element.id === 'link-hours') {
            // test
            console.log('link : ' + element.id);
        }
    });
});


modal.addEventListener('click', ()=> {
    if (modal.style.display != 'none') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'flex';
    }
})
console.log(buttons);