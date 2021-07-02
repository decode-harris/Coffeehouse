
// select all required elements
const filterList = document.querySelector('.filter');
const filterImg = document.querySelectorAll('.panels');

window.onload = () => {

    // forEach [ filterImg ]
    filterImg.forEach(element => {

        // remove all elements from view
        element.style.display = 'none';

        // validate active [ data-name ] : looking for one
        if (element.getAttribute('data-name') === 'one') {

            // apply display property [ flex ] to element
            element.style.display = 'flex';

            // test
            console.log('coffee');
        }
    
    });
    

    filterList.onclick = ( selectedItem ) => { // when a user clicks on filterItem tag

        if ( selectedItem.target.classList.contains('items')) { // if user clicks element which has item class

            filterList.querySelector('.active').classList.remove('active'); // remove active class from the starting element

            selectedItem.target.classList.add('active'); // add active class to the current user clicked element

            let filterName = selectedItem.target.getAttribute('data-name'); // get data-name value of selected element

            // forEach [ filterImg ]
            filterImg.forEach((element) => {

                element.style.display = 'none';
                let filterImages = element.getAttribute('data-name'); // get the images data-name value

                let active = document.querySelector('.active');
                console.log(active);

                // validate if user selected item data-name value is equal to filtername
                if (filterImages === filterName || filterName === 'all') {

                    // test
                    console.log('filterImage : ' + filterImages + ' filterName : ' + filterName);

                    // display filterImg elements as flex
                    element.style.display = 'flex';
                    
                    return
                }
                else {
                    element.style.display = 'none';
                    
                    // test [ filter : else ]
                    console.log('filter else : true');
                }
            });
        }
        else {
            console.log('false');
        }
    }
}