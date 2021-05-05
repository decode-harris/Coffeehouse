let map;

function initMap() {

    const coords = { lat: -37.914, lng: 144.750 };

    // set map as new google maps [ map ] by selecting html [ map ] element
    map = new google.maps.Map(document.getElementById("map"), {
        // position the map preview to the center with the following coords lat & lon values
        center: coords,
        // zoom into the map coords with a value of 8
        zoom: 12,
    });

    // 
    new google.maps.Marker({
        position : coords,
        map,
        title: 'Coffee House',
    });

}