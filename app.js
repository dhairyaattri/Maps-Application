mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhaXJ5YWF0dHJpIiwiYSI6ImNraHFjMGh2ZTBydmYyenA1bThobDZud2wifQ.rirBvNuLYsq69tCi6GKRKQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(position) {
    setupMap([22.3511148, 78.6677428])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}