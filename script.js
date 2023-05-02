const priceInput = document.querySelector('#price_input')

const fifty = document.querySelector('#fifty')
const twoHundredSixtyNine = document.querySelector('#two_hundred_sixty_nine');
const threeHundred = document.querySelector('#three_hundred')
const threeHundredFifty = document.querySelector('#three_hundred_fifty')
const thousand = document.querySelector('#thousand')
const fourThousandTwoHundred = document.querySelector('#four_thousand_two_hundred')

const selectMl = document.querySelector('#sel_ml')

function Calculate(event) {
    var price = 0;
    if (event.target === undefined) {
        price = event.value;
    } else {
        price = event.target.value;
    }
    
    if (price) {
        const fiftyMlCost = (Number(price)/(Number(selectMl.value)/50));
        fifty.innerHTML = fiftyMlCost.toFixed(3);

        twoHundredSixtyNine.innerHTML = CalculateValueMl(fiftyMlCost, 269);

        threeHundred.innerHTML = CalculateValueMl(fiftyMlCost, 300);

        threeHundredFifty.innerHTML = CalculateValueMl(fiftyMlCost, 350);

        thousand.innerHTML = CalculateValueMl(fiftyMlCost, 1000);

        fourThousandTwoHundred.innerHTML = CalculateValueMl(fiftyMlCost, 4200);
    }
}

function CalculateValueMl(fifty_ml_cost, selected_ml) {
    return (fifty_ml_cost*(Number(selected_ml)/50)).toFixed(2);
}

selectMl.addEventListener('change', () => {
    //console.log(priceInput.innerHTML)
    Calculate(priceInput)
})