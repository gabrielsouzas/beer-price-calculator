const priceInput = document.querySelectorAll('.price_input')

const fifty = document.querySelectorAll('.fifty')
const twoHundredSixtyNine = document.querySelectorAll('.two_hundred_sixty_nine');
const threeHundred = document.querySelectorAll('.three_hundred')
const threeHundredFifty = document.querySelectorAll('.three_hundred_fifty')
const thousand = document.querySelectorAll('.thousand')
const fourThousandTwoHundred = document.querySelectorAll('.four_thousand_two_hundred')

const selectMl = document.querySelectorAll('.sel_ml')

function Calculate(event) {
    if (event) {
        var price = 0;
        var index = 0;
        if (event.target === undefined) {
            price = event.value;
            index = Number(event.dataset.index)
        } else {
            price = event.target.value;
            index = Number(event.target.dataset.index);
        }
    
        const fiftyMlCost = (Number(price)/(Number(selectMl[index].value)/50));
        fifty[index].innerHTML = fiftyMlCost.toFixed(3);

        twoHundredSixtyNine[index].innerHTML = CalculateValueMl(fiftyMlCost, 269);
        threeHundred[index].innerHTML = CalculateValueMl(fiftyMlCost, 300);
        threeHundredFifty[index].innerHTML = CalculateValueMl(fiftyMlCost, 350);
        thousand[index].innerHTML = CalculateValueMl(fiftyMlCost, 1000);
        fourThousandTwoHundred[index].innerHTML = CalculateValueMl(fiftyMlCost, 4200);
    }
}

function CalculateValueMl(fifty_ml_cost, selected_ml) {
    return (fifty_ml_cost*(Number(selected_ml)/50)).toFixed(2);
}

selectMl.forEach(element => {
    element.addEventListener('change', () => {
        Calculate(priceInput[Number(element.dataset.index)]);
    })
});