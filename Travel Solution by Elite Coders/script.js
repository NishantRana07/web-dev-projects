const startLocation = document.querySelector('#startloc');
const destination = document.querySelector('#endloc');
const searchButton = document.querySelector('#searchButton');
const API_KEY = 'YOUR_API_KEY';

function initMap() {
    // Initialize the map centered on a default location (Dehradun)
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 30.3165, lng: 78.0322 }, // Dehradun coordinates
        zoom: 8,
    });

    // Calculate and display the route
    calculateRoute(map);
}

// Function to calculate the route and distance
function calculateRoute(map) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
    });

    const origin = startLocation.value;
    const destinationVal = destination.value;

    const request = {
        origin: origin,
        destination: destinationVal,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    // Calculate the route
    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            calculateDistance(origin, destinationVal);
            findNearbyPlaces(result.routes[0].overview_path, map);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}

// Function to calculate distance between two locations
function calculateDistance(origin, destination) {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
        },
        (response, status) => {
            if (status === 'OK') {
                const distance = response.rows[0].elements[0].distance.text;
                const duration = response.rows[0].elements[0].duration.text;
                document.getElementById('distance').innerHTML = 
                  `Distance: ${distance}, Duration: ${duration}`;
            } else {
                console.error('DistanceMatrix request failed due to ' + status);
            }
        }
    );
}

// Function to find nearby bus stops and hotels along the route
function findNearbyPlaces(routePath, map) {
    const service = new google.maps.places.PlacesService(map);
    const bounds = new google.maps.LatLngBounds();

    routePath.forEach((latlng) => {
        bounds.extend(latlng);
    });

    const request = {
        bounds: bounds,
        type: ['bus_station', 'hotel'], // Search for bus stops and hotels
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((place) => {
                createMarker(place, map);
            });
        } else {
            console.error('Nearby search failed due to ' + status);
        }
    });
}

// Function to create markers for the nearby places
function createMarker(place, map) {
    const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
    });

    const infowindow = new google.maps.InfoWindow({
        content: `<strong>${place.name}</strong><br>${place.vicinity}`,
    });

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });
}

// Event listener for the search button
searchButton.addEventListener('click', function() {
    initMap();
});

// Initialize the map when the window loads
window.onload = initMap;
