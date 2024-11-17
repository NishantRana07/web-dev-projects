/* let map;
let directionsService;
let directionsRenderer;
let geocoder;
const customIcons = {
    start: 'images/pin.png',
    destination: 'images/destination.png',
    hotel: 'images/hotel.png',
    bus_station: 'images/bus-stop.png',
    train_station: 'images/train.png',
    airport: 'images/airport.png',
    hospital: 'images/hospital.png'
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 30.3165, lng: 78.0322 }, // Center on Dehradun
        zoom: 8,
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
    });

    geocoder = new google.maps.Geocoder();

    document.getElementById('searchButton').addEventListener('click', calculateRoute);
}

function calculateRoute() {
    const startLocation = document.getElementById('startloc').value;
    const destination = document.getElementById('endloc').value;

    if (!startLocation || !destination) {
        handleError('Please enter both start and destination locations.');
        return;
    }

    const request = {
        origin: startLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            const routePath = result.routes[0].overview_path;
            findNearbyPlaces(routePath);

            addCustomMarker(startLocation, customIcons.start, 'Start Location');
            addCustomMarker(destination, customIcons.destination, 'Destination');
            displayDistanceAndDuration(result.routes[0].legs[0]);
        } else {
            handleError('Directions request failed due to ' + status);
        }
    });
}

function addCustomMarker(location, iconUrl, title) {
    geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK') {
            const marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                icon: {
                    url: iconUrl,
                    scaledSize: new google.maps.Size(40, 40),
                },
                title: title,
            });

            const infowindow = new google.maps.InfoWindow({
                content: `<strong>${title}</strong><br>${results[0].formatted_address}`,
            });

            marker.addListener('click', () => {
                infowindow.open(map, marker);
            });
        } else {
            handleError('Geocode failed due to: ' + status);
        }
    });
}

function findNearbyPlaces(routePath) {
    const service = new google.maps.places.PlacesService(map);
    const bounds = new google.maps.LatLngBounds();
    const nearbyTypes = ['bus_station', 'hotel', 'train_station', 'airport', 'hospital'];
    const maxDistance = 5000; // Distance in meters to consider points as nearby

    routePath.forEach(latlng => {
        bounds.extend(latlng);
    });

    nearbyTypes.forEach(type => {
        const request = {
            bounds: bounds,
            type: [type],
            rankBy: google.maps.places.RankBy.DISTANCE, // Ensure results are sorted by distance
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                if (results.length === 0) {
                    handleInfo(`No ${type.replace('_', ' ')} found along the route.`);
                }
                results.forEach(place => {
                    const placeLocation = place.geometry.location;
                    routePath.forEach(point => {
                        if (google.maps.geometry.spherical.computeDistanceBetween(placeLocation, point) <= maxDistance) {
                            createMarker(place, customIcons[type]);
                        }
                    });
                });
            } else {
                handleError(`Nearby search for ${type.replace('_', ' ')} failed due to ` + status);
            }
        });
    });
}

function createMarker(place, iconUrl) {
    const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: {
            url: iconUrl,
            scaledSize: new google.maps.Size(40, 40),
        },
        title: place.name,
    });

    const infowindow = new google.maps.InfoWindow({
        content: `<strong>${place.name}</strong><br>${place.vicinity}`,
    });

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });
}

function displayDistanceAndDuration(leg) {
    const distance = leg.distance.text;
    const duration = leg.duration.text;
    document.getElementById('distance').innerHTML = 
        `Distance: ${distance}<br>Duration: ${duration}`;
}

function handleError(message) {
    console.error(message);
    document.getElementById('distance').innerHTML = `Error: ${message}`;
}

function handleInfo(message) {
    console.log(message);
    document.getElementById('distance').innerHTML += `<br>${message}`;
}
window.onload = initMap; */


const tabs = document.querySelectorAll(".tab");
const cardGroups = document.querySelectorAll(".card-group");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from other tabs
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");

        // Get the target group
        const target = tab.getAttribute("data-target");

        // Hide all card groups and show the selected one
        cardGroups.forEach(group => {
            group.classList.remove("active");
        });

        document.querySelector(`.card-group.${target}`).classList.add("active");
    });
});

let allBuses=[
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Karnal',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/blue-bus.avif'},
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Yamunanagar',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/hr bus.png'},
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Karnal',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/hr bus.png'},
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Karnal',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/hr bus.png'},
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Karnal',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/blue-bus.avif'},
{Name:'Dehradun ➡ Yamunanagar',description:' Dehradun to Karnal',distance:'117.4 KM',ac:'No',fair:'₹140/-',via:'Saharanpur, Sarsawa',time:'2:20 AM',image:'images/hr bus.png'},
]
let bus=document.querySelector('.card-slider .buses ,card');
let busCard=`
    <div class="card">
  <img src="images/blue-bus.avif" alt="Travel Image" class="image">
  <div class="card-content">
    <h2>Luxury Travel Route</h2>
    <p class="description">Explore beautiful destinations with comfort and ease.</p>
    <div class="info">
      <div>
        <i class="fas fa-road"></i>
        <span>Distance</span>
        200 km
      </div>
      <div>
        <i class="fas fa-clock"></i>
        <span>Departure Time</span>
        8:30 AM
      </div>
      <div>
        <i class="fas fa-snowflake"></i>
        <span>AC</span>
        Available
      </div>
      <div>
        <i class="fas fa-money-bill-wave"></i>
        <span>Fare</span>
        ₹500
      </div>
      <div class='via'>
        <i class="fas fa-map-marker-alt"></i>
        <b>Via</b> - Route A
        
      </div>
    </div>
    <button class="card-button">Book Now</button>
  </div>
</div>
`;

function addBuses()
{

let content=``;
allBuses.forEach(obj=>{
    
    content+=`<div class="card">
  <img src="${obj.image}" alt="Travel Image" class="image">
  <div class="card-content">
    <h2>${obj.Name}</h2>
    <p class="description">${obj.description}</p>
    <div class="info">
      <div>
        <i class="fas fa-road"></i>
        <span>Distance</span>
        ${obj.distance}
      </div>
      <div>
        <i class="fas fa-clock"></i>
        <span>Departure Time</span>
        ${obj.time}
      </div>
      <div>
        <i class="fas fa-snowflake"></i>
        <span>AC</span>
        ${obj.ac}
      </div>
      <div>
        <i class="fas fa-money-bill-wave"></i>
        <span>Fare</span>
        ${obj.fair}
      </div>
      <div class='via'>
        <i class="fas fa-map-marker-alt"></i>
        <b>Via</b> - ${obj.via}
        
      </div>
    </div>
    <button class="card-button">Book Now</button>
  </div>
</div>`;
})
bus.innerHTML=content;
}

addBuses();