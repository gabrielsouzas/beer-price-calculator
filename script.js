const fifty = document.querySelector('#fifty')
const threeHundred = document.querySelector('#three_hundred')
const threeHundredFifty = document.querySelector('#three_hundred_fifty')
const thousand = document.querySelector('#thousand')
const fourThousandTwoHundred = document.querySelector('#four_thousand_two_hundred')

const selectMl = document.querySelector('#sel_ml')

function Calculate({target}) {
    const price = target.value;
    if (price) {
        const fiftyMlCost = (Number(price)/(Number(selectMl.value)/50)).toFixed(2);
        fifty.innerHTML = fiftyMlCost;

        threeHundred.innerHTML = (fiftyMlCost*(Number(selectMl.value)/50))
    }
}