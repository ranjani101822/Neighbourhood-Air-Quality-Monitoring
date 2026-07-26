function validateReading(locality, pm, device) {

    if (locality.trim() === "") {
        alert("Locality is required");
        return false;
    }

    if (pm === "" || isNaN(pm)) {
        alert("Enter a valid PM value");
        return false;
    }

    if (pm < 0 || pm > 500) {
        alert("PM value must be between 0 and 500");
        return false;
    }

    if (device.trim() === "") {
        alert("Device ID is required");
        return false;
    }

    return true;
}