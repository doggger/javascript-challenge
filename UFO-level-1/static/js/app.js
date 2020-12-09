// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var form = d3.select("#form");
var button = d3.select("#filter-btn");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

function runEnter() {
    d3.event.preventDefault();
    usrdate = d3.select("#datetime").property("value");
    console.log(usrdate)
    if(usrdate) {
        var filteredData = tableData.filter(sitng => sitng.datetime === usrdate);
        tbody.html("");
        if (filteredData.length === 0) {
            var row = tbody.append("tr");
            var cell = row.append("td")
            cell.text("No sightings found in specified date range.")

        } else {
            filteredData.forEach((sighting) => {
                row = tbody.append("tr");
                Object.entries(sighting).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        }
    } else {
        tbody.html("");
        data.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
}

form.on("submit", runEnter);
button.on("click", runEnter);



