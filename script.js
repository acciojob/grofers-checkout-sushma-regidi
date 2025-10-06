function calculateTotal() {
  // Select all price elements
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Sum up all prices
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Create a new row and a cell
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Make the cell span both columns (optional)
  newCell.colSpan = 2;
  newCell.textContent = "Total Price: " + total;

  // Append cell to row, and row to the table
  newRow.appendChild(newCell);
  document.getElementById("grocery").appendChild(newRow);
}


