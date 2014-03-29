bathrooms = [
    {
        location: "Building 4, 2nd floor",
        
    }
]

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("No location for you.");
    }
}

function showPosition(position) {
    getBaths(position.coords);
}

function getBaths(loc) {
    alert(loc);
}
