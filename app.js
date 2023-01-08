// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

filters = {};

function updateFilters() {
  var changedInput = d3.select(this);
  var changedID = changedInput.attr("id");
  var changedValue = changedInput.property("value");
  console.log(changedID, changedValue);
  if (changedValue) {
    filters[changedID] = changedValue;
  }
  else {
    delete filters[changedID];
  }
  filterData();
}

function filterData() {
  console.log("filterData is working.")
  var filteredData = tableData;
  for (const key in filters) {
    filteredData = filteredData.filter(row => row[key] === filters[key]);
  }
  buildTable(filteredData);
}
/* function filterTableButton() {
  console.log("filterTableButton is working.")
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  };

  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  };

  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  };

  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}; */



// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters); // filterTableButton);


// d3.selectAll(".filters").on("change", filterTableButton);

// Build the table when the page loads
buildTable(tableData); 





