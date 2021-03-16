function calculate() {
    var amount = document.getElementById("amount")
    var apr = document.getElementById("apr")
    var years = document.getElementById("years")
    var zipCode = document.getElementById("zipcode")
    var payment = document.getElementById("payment")
    var total = document.getElementById("total")
    var totalInterest = document.getElementById("totalinterest")

    var principal = parseFloat(amount.value)
    var interest = (parseFloat(apr.value) / 100) / 12
    var payments = parseFloat(years.value) * 12
    console.log("principal",principal)
    console.log("interest",interest)
    console.log("payments",payments)
    var x = letX(interest, payments)
    console.log("x", x)
    var monthly = (principal * x * interest) / (x - 1)
    console.log(monthly)
    if (isFinite(monthly)) {
        console.log("E finito")
        payment.innerHTML = monthly.toFixed(2)
        total.innerHTML = (monthly * payments).toFixed(2)
        totalInterest.innerHTML = ((monthly * payments) - principal).toFixed(2)

        save(amount.value, apr.value, years.value, zipCode.value)
        chart(principal, interest, monthly, payment)
    }
    else {
        payment.innerHTML = ""
        total.innerHTML = ""
        totalInterest.innerHTML = ""
    }
}

function save(amount, apr, years, zipCode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount
        localStorage.loan_apr = apr
        localStorage.loan_years = years
        localStorage.loan_zipCode = zipCode
    }
}

window.onload = function () {
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount
        document.getElementById("apr").value = localStorage.loan_apr
        document.getElementById("years").value = localStorage.loan_years
        document.getElementById("zipcode").value = localStorage.loan_zipCode
    }
}
function letX(interest, payments){
    console.log(interest, payments)
    return Math.pow(1 + interest, payments)
}

function chart(principal, interest, monthly, payments) {
    let graph = document.getElementById("graph")
    graph.width = graph.width
    if (arguments.length == 0 || !graph.getContext) return

    let g = graph.getContext("2d")
    let width = graph.width, height = graph.height
}

function paymentToX(n) {
    return n * width / payments
}
function amountToY(a) {
    return height - (a * height / (monthly * payments * 1.05))
}