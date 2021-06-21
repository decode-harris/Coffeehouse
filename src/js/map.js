let map;

// function [ initMap ]
function initMap() {

    // set coords as business location
    const coords = { lat: -37.914, lng: 144.750 };

    // set map variable as new [ google maps ] map
    map = new google.maps.Map(document.getElementById("map"), {

        // position the map preview to the center with the following coords lat & lon values
        center: coords,
        // zoom into the map coords with a value of 12
        zoom: 12,
    });

    // set a map marker at coords position
    new google.maps.Marker({
        position : coords,
        map,
        title: 'Coffee House',
    });
}

// init [ initMap ] function
initMap();


// function [ mql ] : media query listener
mql = (mq) => {

    // validte if [ media query ] matches desktop
    if (mq.matches) {

        // test
        console.log('media query : desktop');
    }
    // validte if [ media query ] matches mobile
    else {

        // test
        console.log('media query : mobile');
    }
}
// media query selector
let mq = window.matchMedia('min-width:760px');

// init [ mql ] function
mql(mq);

// listener event [ mql]
mql.addEventListener(mql);

