// Select all the price elements
const prices = document.querySelectorAll('.prices');

let total = 0;

// Loop through each price element and sum up their values
prices.forEach(price => {
  total += parseFloat(price.textContent);
});

// Create a new table row
const totalRow = document.createElement('tr');

// Create a new cell for total
const totalCell = document.createElement('td');

// Set the cell to span across all columns if needed
totalCell.colSpan = prices[0].parentElement.children.length;

// Add total text
totalCell.textContent = `Total Price: ${total.toFixed(2)}`;

// Append the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);



