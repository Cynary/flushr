// Calculate spherical distance; from
// http://stackoverflow.com/questions/13840516/how-to-find-my-distance-to-a-known-location-in-javascript
function distance(lon1, lat1, alt1, lon2, lat2, alt2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    var dLon = (lon2-lon1).toRad(); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    
    // let's take altitude into account
    d = Math.sqrt(d*d + (alt1-alt2)*(alt1-alt2))
    return d;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
        return this * Math.PI / 180;
    }
}

bathrooms = [
    {
        locationName: "Building 4, 2nd floor",
        latitude:,
        longitude:,
        altitude:,
    }
]

function getBathrooms(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sortBathrooms(callback));
    } else {
        callback(bathrooms)
    }
}

function sortBathrooms(callback) {
    return function(position) {
        var altitude = position.coords.altitude
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        bathrooms.sort(function(bath1, bath2) {
            var dist1 = distance(longitude,latitude,altitude,
                                 bath1.longitude,bath1.latitude,bath1.altitude)
            var dist2 = distance(longitude,latitude,altitude,
                                 bath2.longitude,bath2.latitude,bath2.altitude)
            return dist1-dist2
        })
        callback(bathrooms)
    }
}
