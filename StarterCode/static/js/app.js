// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table");

var tbody = d3.select("tbody");

var filterButton = d3.select("#filter-btn");
var clearTable = d3.select("clear-btn");
//display table contents
function populateData(newTable) {
    newTable.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

// handles the table filtering
function handleClick() {
    d3.event.preventDefault();
    var dataFilter = tableData;
    var dateInput = d3.select("#datetime").property("value");
    // filter by date
    if (dateInput) {
        dataFilter = tableData.filter(data => data.datetime === dateInput);
    };

    populateData(dataFilter);
};

filterButton.on("click", handleClick);
// clear all data from table
clearTable.on("click", function () {
    tableData.clear();
})
