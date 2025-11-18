

function calculateTotal() {
  // Select all price elements
  const priceCells = document.querySelectorAll(".prices");

  let total = 0;

  // Convert text to numbers and add them
  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create a new row
  const table = document.querySelector("table"); 
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Make the total cell span across the whole table (optional)
  totalCell.colSpan = table.rows[0].cells.length;
  totalCell.textContent = "Total Price: " + total;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
}


