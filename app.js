let total = 0

let $total = $("#start")

let monthlyInvestment = 1000

let months = 120

const $money = $("#money")

const $rate = $("#rate")

const $months = $("#months")



const $calculate = $("#calculate")

const $calculator = $("#calculator")

$calculator.on("submit", function(event){
    event.preventDefault();
    
    $('#total').remove()
    
    total = Number($total.val())
    for (let i=0; i< Number($months.val()); i++) {
        compound($money,$rate)
   }
   
    $("form").append(`<p id="total">${total}</p>`)
   
   
   
   
})


function compound(money,rate) {
    let interest
    let percentIncrease = Number(rate.val())/12
    total += Number(money.val());
    interest = total * percentIncrease
    total += interest
    return total
}

