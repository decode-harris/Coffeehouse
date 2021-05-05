
// select all required elements
const filterList = document.querySelector('.list');
const filterImg = document.querySelectorAll('.panels');

window.onload = () => {

    filterList.onclick = ( selectedItem ) => { // when a user clicks on filterItem tag

        if ( selectedItem.target.classList.contains('items')) { // if user clicks element which has item class

            filterList.querySelector('.active').classList.remove('active'); // remove active class from the starting element

            selectedItem.target.classList.add('active'); // add active class to the current user clicked element

            let filterName = selectedItem.target.getAttribute('data-name'); // get data-name value of selected element
            
            // test
            console.log(filterName);

            filterImg.forEach((element) => {
                let filterImages = element.getAttribute('data-name'); // get the images data-name value

                // validate if user selected item data-name value is equal to filtername
                if ((filterImages == filterName) || filterName == 'all') {
                    
                    element.classList.remove('hide-image'); // remove hide-image class from specific filter elements
                    element.classList.add('show-image'); // add show-image class to specific filtered elements
                }
                else {
                    element.classList.remove('show-image');
                    element.classList.add('hide-image');
                }

                // test
                console.log('filterImages as : ' + filterImages);

            });

            // test
            // console.log('true');
        }
        else {
            console.log('false');
        }

    }

}


