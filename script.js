// let data = [];

// fetch("data/air_quality.json")
// .then(res => res.json())
// .then(result => {
// data = result;
// displayData(data);
// });

// function displayData(list){

// let table = "";

// list.forEach(item=>{

// let cls="";

// if(item.level=="Good")
// cls="good";

// else if(item.level=="Moderate")
// cls="moderate";

// else if(item.level=="Poor")
// cls="poor";

// else
// cls="hazard";

// table += `

// <tr>

// <td>${item.reading_id}</td>

// <td>${item.locality}</td>

// <td>${item.pm_value}</td>

// <td class="${cls}">${item.level}</td>

// <td>${item.recorded_at}</td>

// <td>${item.device_id}</td>

// <td>

// <button onclick="editReading(${item.reading_id})">
// Edit
// </button>

// <button onclick="deleteReading(${item.reading_id})">
// Delete
// </button>

// </td>

// </tr>

// `;

// });

// document.getElementById("tableBody").innerHTML=table;

// document.getElementById("count").innerHTML=
// "Total Records : "+list.length;

// }

// function searchReading(){

// let value=document.getElementById("search").value.toLowerCase();

// let result=data.filter(item=>

// item.locality.toLowerCase().includes(value)

// );

// displayData(result);

// }

// function filterLevel(){

// let level=document.getElementById("filter").value;

// if(level=="All")
// displayData(data);

// else{

// let result=data.filter(item=>

// item.level==level

// );

// displayData(result);

// }

// }

// function deleteReading(id){

// if(confirm("Delete this record?")){

// data=data.filter(item=>item.reading_id!=id);

// displayData(data);

// }

// }

// function editReading(id){

// localStorage.setItem("editId",id);

// window.location="edit.html";

// }


let data = [];
document.getElementById("count").innerHTML="Loading...";

fetch("data/air_quality.json")
.then(res => res.json())
.then(json => {

let local = JSON.parse(localStorage.getItem("readings")) || [];

data = [...json, ...local];

displayData(data);
showWarning(data);

})
.catch(() => {

document.getElementById("tableBody").innerHTML=

"<tr><td colspan='7'>Unable to load data</td></tr>";

document.getElementById("count").innerHTML="Error";

});

function displayData(list){

let table = "";
if(list.length===0){

document.getElementById("tableBody").innerHTML=

"<tr><td colspan='7'>No Records Found</td></tr>";

document.getElementById("count").innerHTML="Total Records : 0";

return;

}

list.forEach(item=>{

let color="";

if(item.level=="Good")
color="good";

else if(item.level=="Moderate")
color="moderate";

else if(item.level=="Poor")
color="poor";

else
color="hazard";

table += `

<tr>

<td>${item.reading_id}</td>

<td>${item.locality}</td>

<td>${item.pm_value}</td>

<td class="${color}">${item.level}</td>

<td>${item.recorded_at}</td>

<td>${item.device_id}</td>

<td>

<button onclick="editReading(${item.reading_id})">
Edit
</button>

<button onclick="deleteReading(${item.reading_id})">
Delete
</button>

</td>

</tr>

`;

});

document.getElementById("tableBody").innerHTML = table;

document.getElementById("count").innerHTML =
"Total Records : " + list.length;

}

function searchReading(){

let text = document.getElementById("search").value.toLowerCase();

let result = data.filter(item =>
item.locality.toLowerCase().includes(text)
);

displayData(result);

}

function filterLevel(){

let level = document.getElementById("filter").value;

if(level=="All"){

displayData(data);

return;

}

let result = data.filter(item =>
item.level == level
);

displayData(result);

}

function deleteReading(id){

if(!confirm("Delete this record?"))
return;

let readings = JSON.parse(localStorage.getItem("readings")) || [];

readings = readings.filter(item => item.reading_id != id);

localStorage.setItem("readings", JSON.stringify(readings));

data = data.filter(item => item.reading_id != id);

displayData(data);

}

function editReading(id){

localStorage.setItem("editId", id);

window.location = "edit.html";

}
function showWarning(list){

let consecutive = 0;

for(let item of list){

    if(item.level === "Hazardous"){

        consecutive++;

        if(consecutive >= 3){

            document.getElementById("warning").innerHTML =
            "⚠ Hazardous Air Quality Detected!";
            document.getElementById("warning").style.color = "red";

            return;
        }

    }else{

        consecutive = 0;

    }

}

document.getElementById("warning").innerHTML =
"✔ Air Quality is Safe";
document.getElementById("warning").style.color = "green";

}