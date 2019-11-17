// pull the data and put it into a table

// make sure the data is there first
console.log(data)

// select the tbody tag
// iterate through the data and add a <tr> tag for each row
// iterate through each row and add a <td> tag for each item in the row

function makeTable(tableData){
    const tbody = d3.select("#ufo-tbody");
    
    tableData.forEach(function(ufoSighting) {
        const row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]) {
            const cell = row.append("td");
            cell.text(value);
        
        });
                    
    });

};

makeTable(data)

// button for date filter
// select the class for the input div; pull out the value and save as a variable
// console.log the variable
// use .filter() to filter through the data and pull the rows where the datetime value matches the input variable
// console.log the filtered data
// reset the table
// run makeTable() with the filtered data

const dateButton = d3.select("#date-btn");
dateButton.on("click", function() {
    
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filteredData = data.filter(row => row.datetime === inputValue);
    
    console.log(filteredData);

    d3.selectAll("tr").selectAll("td").remove()

    makeTable(filteredData);

});

// button for state filter
const stateButton = d3.select("#state-btn");
stateButton.on("click", function() {
    
    let inputElement = d3.select("#state");

    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filteredData = data.filter(row => row.state === inputValue);
    
    console.log(filteredData);

    d3.selectAll("tr").selectAll("td").remove()

    makeTable(filteredData);

});

// button for shape filter
const shapeButton = d3.select("#shape-btn");
shapeButton.on("click", function() {
    
    let inputElement = d3.select("#shape");

    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filteredData = data.filter(row => row.shape === inputValue);
    
    console.log(filteredData);

    d3.selectAll("tr").selectAll("td").remove()

    makeTable(filteredData);

});