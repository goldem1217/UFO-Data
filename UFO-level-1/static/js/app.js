makeTable(data)

function makeTable(tableData){
    const tbody = d3.select("#ufo-tbody");
    
    data.forEach(function(ufoSighting) {
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        
        });
                    
    });

};

