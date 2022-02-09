window.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById("calc_btn").addEventListener("click", calculate)
})

function calculate() {
    let firstProduct = Number(document.getElementById("firstProduct").value);
    let firstLot = Number(document.getElementById("firstLot").value);


    let re = new RegExp(/^[0-9]+$/i);
    if (!(
            re.test(firstProduct) &&
            re.test(firstLot) &&
        )) {
        alert("Вводите только числа ");
    } else if (firstProduct == "") {
        alert("Enter the cost of the first product");
    } else if (firstLot == "") {
        alert("Enter the quantity of the first product");
    } else {
        const cost = firstProduct * firstLot;
        document.getElementById("cost").innerHTML =
            "Total cost: " + cost + " rub";
    }
}
