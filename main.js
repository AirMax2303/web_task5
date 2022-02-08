window.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById("calc_btn").addEventListener("click", calculate)
})

function calculate() {
    let firstProduct = Number(document.getElementById("firstProduct").value);
    let firstLot = Number(document.getElementById("firstLot").value);
    let secondProduct = Number(document.getElementById("secondProduct").value);
    let secondLot = Number(document.getElementById("secondLot").value);


    let re = new RegExp(/^[0-9]+$/i);
    if (!(
            re.test(firstProduct) &&
            re.test(firstLot) &&
            re.test(secondProduct) &&
            re.test(secondLot)
        )) {
        alert("Вводите только числа ");
    } else if (firstProduct == "") {
        alert("Enter the cost of the first product");
    } else if (firstLot == "") {
        alert("Enter the quantity of the first product");
    } else if (secondProduct == "") {
        alert("Enter the cost of the second product");
    } else if (secondLot == "") {
        alert("Enter the quantity of the second product");
    } else {
        const cost = firstProduct * firstLot + secondProduct * secondLot;
        document.getElementById("cost").innerHTML =
            "Total cost: " + cost + " rub";
    }
}