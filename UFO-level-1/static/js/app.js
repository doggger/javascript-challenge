// from data.js
var tableData = data;

// YOUR CODE HERE!\

// USES D3 TO ASSIGN ELEMENT OF HTML TO VARIABLES
var tbody = d3.select("tbody");
var form = d3.select("#form");
var button = d3.select("#filter-btn");


// CREATES INITIAL TABLE WITH FULL DATA
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// SINGLE FUNCTION FOR SEARCH AND RE-SEARCH
function runEnter() {
    //PREVENT RELOAD OF PAGE
    d3.event.preventDefault();
    //ASSIGN USER INPUT TO A VARIABLE
    usrdate = d3.select("#datetime").property("value");
    console.log(usrdate)
    if(usrdate) {
        var filteredData = tableData.filter(sitng => sitng.datetime === usrdate);
        // CLEARS TABLE PRIOR TO ADDING DATA SUBSET
        tbody.html("");
        // RETURNS STRING IF NO DATA IN USER SEARCH
        if (filteredData.length === 0) {
            var row = tbody.append("tr");
            var cell = row.append("td")
            cell.text("No sightings found in specified date range.")
        } else {
             //IF USER SEARCH DATA NOT BLANK THEN CREATES NEW TABLE
            filteredData.forEach((sighting) => {
                row = tbody.append("tr");
                Object.entries(sighting).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        }
     // IF USER INPUT IS BLANK RELOADS FULL DATA TABLE
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

// RUNS SEARCH FUNCTION ON ENTER OR CLICK
form.on("submit", runEnter);
button.on("click", runEnter);



