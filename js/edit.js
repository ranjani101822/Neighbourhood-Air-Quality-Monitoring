// let id = localStorage.getItem("editId");

// let readings = JSON.parse(localStorage.getItem("readings")) || [];

// let record = readings.find(item => item.reading_id == id);

// if(record){

// document.getElementById("locality").value = record.locality;

// document.getElementById("pm").value = record.pm_value;

// document.getElementById("level").value = record.level;

// document.getElementById("device").value = record.device_id;

// }

// function updateReading(){

// record.locality = document.getElementById("locality").value;

// record.pm_value = Number(document.getElementById("pm").value);

// record.level = document.getElementById("level").value;

// record.device_id = document.getElementById("device").value;

// record.recorded_at = new Date().toLocaleString();

// localStorage.setItem("readings", JSON.stringify(readings));

// alert("Record Updated Successfully");

// window.location = "index.html";

// }


function updateReading() {

    let locality = document.getElementById("locality").value;

    let pm = document.getElementById("pm").value;

    let device = document.getElementById("device").value;

    if (!validateReading(locality, pm, device))
        return;

    record.locality = locality;

    record.pm_value = Number(pm);

    record.level = getAirLevel(pm);

    record.device_id = device;

    record.recorded_at = getCurrentDate();

    localStorage.setItem("readings",
        JSON.stringify(readings));

    alert("Updated Successfully");

    window.location = "index.html";

}