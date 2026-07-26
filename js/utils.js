function getAirLevel(pm) {

    pm = Number(pm);

    if (pm <= 35)
        return "Good";

    if (pm <= 60)
        return "Moderate";

    if (pm <= 100)
        return "Poor";

    return "Hazardous";
}

function getCurrentDate() {

    return new Date().toLocaleString();

}