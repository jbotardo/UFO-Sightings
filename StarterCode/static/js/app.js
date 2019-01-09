// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table");

var filterButton = d3.select("#filter-btn");
var clearTable = d3.select("clear-btn");
//display table contents
function populateData(newTable) {
    
    var tbody = d3.select("tbody");
    newTable.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            console.log(key + " " + value);
        });
    });
    console.log(newTable);
};
populateData(tableData);
// handles the table filtering
function handleClick() {
    d3.selectAll("tbody").html("");
    d3.event.preventDefault();
    var dataFilter;
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#cityname").property("value");
    var stateInput = d3.select("#statename").property("value");
    var countryInput = d3.select("#countryname").property("value");
    var shapeInput = d3.select("#shapename").property("value");
    // filter based on user input
    if (dateInput) {
        dataFilter = tableData.filter(data => data.datetime === dateInput);
    };
    if (cityInput) {
        dataFilter = tableData.filter(data => data.city === cityInput.toLowerCase());
    };
    if (stateInput) {
        dataFilter = tableData.filter(data => data.state === stateInput.toLowerCase());
    };
    if (countryInput) {
        dataFilter = tableData.filter(data => data.country === countryInput.toLowerCase());
    };
    if (shapeInput) {
        dataFilter = tableData.filter(data => data.shape === shapeInput.toLowerCase());
    };

    
    populateData(dataFilter);
};

filterButton.on("click", handleClick);
// clear all data from table
// d3.event.preventDefault();
clearTable.on("click", function () {
    tableData.clear();
})
