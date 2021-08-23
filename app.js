let total = 0

let monthlyInvestment = 1000


// 5 percent
// let percentIncrease = .00416


// 10 percent
let percentIncrease = .0082

let months = 120

let interest

function compound() {
    total += monthlyInvestment;
    interest = total * percentIncrease
    total += interest
    console.log(total)
    return total
}

for (let i=0; i< months; i++) {
    compound()
}