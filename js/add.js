// function saveReading() {

// let locality = document.getElementById("locality").value;

// let pm = document.getElementById("pm").value;

// let level = document.getElementById("level").value;

// let device = document.getElementById("device").value;

// if(locality=="" || pm=="" || device==""){

// alert("Fill all fields");

// return;

// }

// let readings = JSON.parse(localStorage.getItem("readings")) || [];

// let obj = {

// reading_id: Date.now(),

// locality: locality,

// pm_value: Number(pm),

// level: level,

// recorded_at: new Date().toLocaleString(),

// device_id: device

// };

// readings.push(obj);

// localStorage.setItem("readings", JSON.stringify(readings));

// alert("Reading Added Successfully");

// window.location = "index.html";

// }


function showLevel() {

    let pm = document.getElementById("pm").value;

    if (pm === "")
        return;

    document.getElementById("status").innerHTML =
        "Level : " + getAirLevel(pm);

}

function saveReading() {

    let locality = document.getElementById("locality").value;

    let pm = document.getElementById("pm").value;

    let device = document.getElementById("device").value;

    if (!validateReading(locality, pm, device))
        return;

    let readings =
        JSON.parse(localStorage.getItem("readings")) || [];

    let obj = {

        reading_id: Date.now(),

        locality: locality,

        pm_value: Number(pm),

        level: getAirLevel(pm),

        recorded_at: getCurrentDate(),

        device_id: device

    };

    readings.push(obj);

    localStorage.setItem("readings",
        JSON.stringify(readings));

    alert("Reading Added Successfully");

    window.location = "index.html";

}