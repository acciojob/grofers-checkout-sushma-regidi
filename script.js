
function calculateTotal() {
    const priceCells = document.querySelectorAll(".price");
    let total = 0;

    priceCells.forEach(cell => {
        let value = parseFloat(cell.textContent.trim());
        if (!isNaN(value)) total += value;
    });

    document.getElementById("ans").textContent = total;
}




