function calculateTotal() {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
        let num = parseFloat(cell.textContent);
        if (!isNaN(num)) total += num;
    });

    document.getElementById("ans").textContent = total;
}



