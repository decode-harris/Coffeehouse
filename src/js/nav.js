const nav = document.querySelector('#nav .list');
nav.style.display = 'none';


const more = document.querySelector('#more');
more.style.display = 'none';

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